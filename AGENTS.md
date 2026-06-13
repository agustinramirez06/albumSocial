# CSYDP ÁLBUM DIGITAL

Proyecto de álbum de figuritas virtual del **Club Social y Deportivo Pila (CSYDP)**.
Álbum de figuritas con temática de los campeonatos del club (2017, jugadores actuales, promesas, escudos históricos).

## ESTRUCTURA DEL PROYECTO

```
/
├── vercel.json               # Configuración para deploy en Vercel
├── index.html                # App principal (Tailwind dark, SPA moderna) — raíz
├── login.html                # Login/registro con Supabase Auth — raíz
├── App/
│   ├── app.js                # ~1192 líneas: stickers, DataService, render, sorteo, stats, perfil, avatar, compartir, zoom, orientación
│   └── login.js              # Login/registro con Supabase Auth
├── Styles/
│   ├── styles.css            # Estilos del álbum, pilón, animaciones
│   └── login.css             # Estilos de login/registro
├── robots.txt                # Rastreo permitido para buscadores
└── assets/                   # Logo, sobres, fotos del club, favicon
```

## STACK

- HTML5 + CSS3 + Vanilla JS (tres archivos: index.html / app.js / styles.css)
- Tailwind CSS (vía CDN con tailwind.config inline)
- Supabase JS SDK v2 (vía CDN)
- Google Fonts: Anybody, Hanken Grotesk, JetBrains Mono
- Material Symbols (iconos)
- **Sin frameworks ni build tools**

## SUPABASE

- Project ref: `wumpbrsnzoybwszjsbwv`
- Storage bucket público: `images-album`
  - Carpeta `stickers/` con `0.png` a `69.png` (comprimidos)
  - URL base: `https://wumpbrsnzoybwszjsbwv.supabase.co/storage/v1/object/public/images-album`
- Anon key configurada en `app.js`

## FASES DEL PROYECTO

### FASE 1 (completa) — Frontend local con localStorage
- Datos de figuritas hardcodeados en JS (`stickers{}`)
- Álbum renderizado desde `albumPages[]`
- Estado de figuritas en memoria (arrays `misFiguritasPegadas` / `misFiguritasSueltas`)
- Persistencia en localStorage (`csydp_pegadas`, `csydp_sueltas`, `csydp_ultimo_sobre`)
- Pack opening con modal multi-step (sobre → revelar 1x1 → VER TODAS → ACEPTAR)
- Pilón: panel compacto desde arriba con grilla de sueltas y navegación directa al sticker
- Progreso dinámico en main-view
- Countdown hasta medianoche (hora local)
- Modo prueba: sin límite diario de sobres

### FASE 2 (completa) — Integración Supabase
- [x] Bucket `images-album` creado y público con stickers comprimidos
- [x] Tabla `figuritas` seedeada con 20 rows
- [x] RLS policies para lectura pública de `figuritas` y storage
- [x] Anon key real configurada en frontend
- [x] `stickers{}` migrado a bucket URLs (sin rutas locales)
- [x] Helpers `getStickerUrl()`, `getEmptyUrl()`, `STICKER_FILE_IDS` creados
- [x] Bug fixes: `reRenderAlbum()` sin innerHTML, `hidden` class duplicada eliminada
- [x] DataService migrado a Supabase (getMisFiguritas, pegarFigurita, abrirSobre, yaAbrioHoy)
- [x] CRUD en `album_usuarios` (insert al abrir sobre, update al pegar)
- [x] Control `ultimo_sobre` desde servidor (perfiles.ultimo_sobre)
- [x] Login con Supabase Auth
- [x] Perfil de usuario desde `perfiles` + `auth.users`
- [x] Frontend preparado con DataService como capa de abstracción

## BASE DE DATOS (Supabase)

### `figuritas`
| Columna     | Tipo   | Descripción                        |
|-------------|--------|------------------------------------|
| id          | bigint | Número fijo de figurita (PK)       |
| nombre      | text   | Nombre del jugador/elemento        |
| categoria   | text   | campeones / (futuro: actuales, promesas, historica, especial) |
| imagen_url  | text   | URL de la imagen en bucket `images-album` |

### `perfiles`
| Columna      | Tipo         | Descripción                              |
|--------------|--------------|------------------------------------------|
| id           | uuid         | PK, FK a auth.users (default auth.uid()) |
| username     | text         | Nombre de usuario                        |
| avatar_url   | text         | URL de la foto de perfil (nullable)      |
| ultimo_sobre | date         | Fecha de la última vez que abrió sobre   |
| created_at   | timestamptz  | Fecha de registro (default now())        |

### `album_usuarios`
| Columna      | Tipo         | Descripción                               |
|--------------|--------------|-------------------------------------------|
| id           | bigint       | Auto-incremental (PK)                     |
| id_usuario   | uuid         | FK a perfiles                             |
| id_figurita  | bigint       | FK a figuritas                            |
| esta_pegada  | boolean      | false = suelta, true = pegada (def: false)|
| fecha_creation | timestamptz | Default now()                             |

## APP — ARQUITECTURA

### Estructura del HTML
- **Header** fijo con logo + botón Pilón desktop + botón Stats + perfil de usuario (dinámico)
- **Main View** (`#main-view`): pantalla de inicio con cards de "Sobre Diario" y "Mi Colección"
- **Album Pages** (`#album-page-1`, `#album-page-2`): renderizadas dinámicamente por JS, siempre con `.album-page` (position: absolute)
- **Pack Modal** (`#pack-modal`): overlay con 3 pasos (cerrado, revelar, completo)
- **Pilón Overlay** (`#pilon-overlay`) + **Pilón Panel** (`#pilon-panel`): dropdown desde arriba con grilla de sueltas
- **Bottom Nav** (mobile): Home, Álbum, Pilón, Stats, Profile

### Sistema de Vistas (SPA)
- Las vistas se ocultan/muestran con la clase CSS `hidden-view`
- Las páginas del álbum llevan siempre `.album-page` (`position: absolute` permanente) para evitar cambios de layout
- `currentView` trackea la vista activa
- `toggleAlbum(pageId, direction)`: navegación entre main-view y páginas del álbum
  - Álbum→álbum: solo toggle `hidden-view` (crossfade vía `view-transition`)
  - Main↔álbum: oculta todas las vistas excepto la target
- `goToHome()`: vuelve a main-view

### Datos de Figuritas (`stickers{}`)
Objeto clave-valor donde key = ID (string), value = `{ nombre, categoria }`.
IDs usan strings numéricas ('0'..'69'). Nota: ID '37' no existe (salto intencional).
- Las URLs de imágenes se resuelven dinámicamente con `getStickerUrl(id)` → bucket `images-album`
- `getEmptyUrl(id)` → bucket `images-album/figuritasVacias/{id}.png`
- Las imágenes vacías se cargan vía prefetch durante el loading screen

### Páginas del Álbum (`albumPages[]`)
Array de objetos con:
- `id`, `title`, `gridCols`, `stickerIds[]`, `specialStickerId`
- `sidebar`: datos del partido (tipo match con score, goleadores)
- `photo`: imagen + label
- `pageLabel`

Actualmente 7 páginas:
1. Campeones Clausura 2017 (stickerIds 1-10, especial: copa 0)
2. Campeones Clausura 2017 (stickerIds 11-18 + 15, especial: escudo histórico)
3–5. Jugadores Actuales (stickerIds 20-49, 10 por página + special 50/51/52)
6–7. Promesas CSYDP (stickerIds 53-69, 10 por página)

### Sistema de Estados de Casilleros
Cada `.sticker-slot` tiene un `data-state` que controla qué se muestra:

| Estado   | Descripción                           |
|----------|---------------------------------------|
| `vacio`  | Casillero vacío (escudo gris)         |
| `pegar`  | Casillero vacío + badge "PEGAR"       |
| `imagen` | Figurita pegada (imagen a color)      |

Estados se manejan con CSS: `.sticker-slot[data-state="vacio"] .state-vacio { display: flex }`, etc.

### Funciones JS existentes

#### Render
- `renderStickerSlot(id)`: genera HTML del casillero (usa `stickerImages[id]` y `emptyImages[id]`)
- `renderAlbumPage(page)`: renderiza página completa del álbum
- `renderSidebar(sidebar)`: renderiza info del partido
- `renderPhoto(photo)`: renderiza foto
- `renderNavButtons(pageId)`: botones Anterior/Siguiente

#### Navegación
- `toggleAlbum(pageId, direction)`: navega entre main-view y páginas del álbum
  - Álbum→álbum: solo toggle `hidden-view` (crossfade vía `view-transition`)
  - Main↔álbum: oculta todas las vistas excepto la target
- `goToHome()`: vuelve a main-view

#### Pack Opening
- `abrirSobre()`: orquesta apertura (verifica límite diario → DataService → actualiza estado → modal)
- `animarApertura()`: transición sobre cerrado → revelar
- `renderStickerStack()`: renderiza stack de stickers con animación
- `siguienteFigurita()`: avanza al siguiente sticker o muestra todas
- `mostrarTodas()`: paso final con grilla de las 5 obtenidas
- `cerrarModalCompleto()`: cierra modal

#### Stickers
- `pasteSticker(btnElement)`: pega figurita (DataService + animación + sonido + contadores)
- `getStickerState(id)`: retorna 'vacio'|'pegar'|'imagen' según estado global

#### Pilón
- `togglePilon()`: abre/cierra panel (recarga estado desde localStorage al abrir)
- `renderPilon()`: renderiza grilla de stickers sueltos en el panel
- `updatePilonCounter()`: actualiza badge(s) y re-renderiza panel si está abierto
- `irAPegar(stickerId)`: cierra pilón y navega al sticker específico con highlight
- `findPageForSticker(stickerId)`: busca en qué página del álbum está un sticker

#### Stats & Profile
- `toggleStatsModal()`: abre/cierra modal de estadísticas
- `renderStats()`: muestra pegadas, sueltas, páginas completadas, rareza
- `toggleProfileModal()`: abre/cierra modal de perfil
- `loadProfile()`: renderiza username y avatar desde `DataService.getProfile()`
- `saveProfileFromModal()`: guarda cambios del perfil

#### Progreso
- `calcularProgreso()`: % de pegadas sobre total
- `updateProgressBar()`: actualiza texto y barra en main-view

#### Utilidades
- `updateTimer()`: countdown hasta medianoche
- `checkDailyPack()`: verifica límite diario real (async, Supabase) y habilita/deshabilita botón
- `reRenderAlbum()`: actualiza data-state de slots sin reconstruir DOM
- `initState()`: carga estado desde DataService (localStorage)

### Animación del Álbum
- Transición entre páginas: crossfade puro (solo `opacity 0.35s ease`)
- No hay movimiento horizontal, ni `translateX`, ni `scale`, ni `rotate`
- Las páginas del álbum tienen `.album-page` con `position: absolute` permanente en el HTML
- No se usa más `slide-stage`, `slide-out-fade`, `slide-in-fade` ni ninguna clase dinámica de animación
- El `<main>` de cada página tiene `.view-transition` que solo transiciona `opacity` (sin `will-change: transform`)
- `toggleAlbum()` para álbum→álbum: `target.classList.remove('hidden-view')` → `currentEl.classList.add('hidden-view')`

## SUPABASE CONFIG (app.js)

```javascript
const SUPABASE_URL = 'https://wumpbrsnzoybwszjsbwv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bXBicnNuem95YndzempzYnd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5ODQ2NDAsImV4cCI6MjA5NTU2MDY0MH0.p9RPH3gmUpjNHvLeZGSkXe5ICsjQI1NzWg-YZpCJE-Y';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  global: { fetch: (...args) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    return fetch(...args, { signal: controller.signal }).finally(() => clearTimeout(timeout));
  }}
});
const SUPABASE_BUCKET_URL = `${SUPABASE_URL}/storage/v1/object/public/images-album`;

function getStickerUrl(id) {
  return `${SUPABASE_BUCKET_URL}/stickers/${id}.png`;
}

function getEmptyUrl(id) {
  return `${SUPABASE_BUCKET_URL}/figuritasVacias/${id}.png`;
}
```

### Countdown
`setInterval(updateTimer, 1000)` calcula tiempo hasta medianoche.
El límite diario se controla vía `perfiles.ultimo_sobre` en Supabase (resetea a las 00:00, estilo Panini).

### Pilón (Panel desde arriba)
- Activado desde bottom nav (mobile) o header (desktop)
- Panel con transición CSS (opacity + translateY) que aparece desde `top-16`
- Grilla compacta de stickers sueltos (`grid-cols-5 md:grid-cols-8`)
- Click en un sticker → `irAPegar(id)` cierra panel, navega al álbum, hace `scrollIntoView` + highlight
- Overlay semitransparente detras para cerrar con click
- `updatePilonCounter()` actualiza badges via `querySelectorAll('.pilon-badge')` y re-renderiza panel si está `.open`

## CONVENCIONES DE CÓDIGO

- Variables en español o spanglish claro
- Nombres de IDs en kebab-case (ej: `album-page-1`, `main-view`)
- Nombres de funciones en camelCase
- `async/await` para operaciones asíncronas
- Manipulación del DOM exclusivamente por IDs de elementos
- Sin comentarios en el código (salvo separadores de secciones)
- Sin librerías externas (excepto Supabase SDK)

## PATRONES IMPORTANTES

### Capa de Datos (DataService)
Implementado con Supabase + localStorage como fallback:

```javascript
const DataService = {
  STORAGE_PEGADAS: 'csydp_pegadas',
  STORAGE_SUELTAS: 'csydp_sueltas',
  STORAGE_ULTIMO_SOBRE: 'csydp_ultimo_sobre',
  STORAGE_PROFILE: 'csydp_profile',
  async getMisFiguritas() { ... },
  async pegarFigurita(figuritaId) { ... },
  async abrirSobre() { ... },
  async yaAbrioHoy() { ... },
  async getProfile() { ... },
  async saveProfile(profile) { ... }
}
```

### Estado Global
```javascript
let misFiguritasPegadas = [];   // IDs de figuritas pegadas
let misFiguritasSueltas = [];   // IDs de figuritas sueltas (sin pegar)
```

### Flujo de Pegado
1. Usuario hace clic en badge "PEGAR" del casillero
2. `pasteSticker()`: flag `isPasting` previene race condition, verifica que el ID esté en `misFiguritasSueltas`
3. `DataService.pegarFigurita(id)`: hace `update` en Supabase `album_usuarios` + localStorage como fallback
4. JS splitea de `misFiguritasSueltas` y pushea a `misFiguritasPegadas`
5. `slot.dataset.state = 'imagen'` + animación glow dorado
6. `updateProgressBar()` + `updatePilonCounter()`
7. Si progreso = 100%, abre modal de completado

### Nota sobre index2.html
`index2.html` usa las mismas keys de localStorage (`csydp_pegadas`, etc.), por lo que los datos se comparten entre ambos archivos. No representa un problema funcional, pero puede causar confusión al probar.

## COMANDOS
- No hay build system ni package.json (frontend vanilla)
- Para desarrollo: abrir `index.html` en navegador
- Modo prueba: agregar `?modo_prueba=true` a la URL (sin límite diario)
- Sin tests configurados aún
- Hard refresh (Ctrl+F5) para limpiar caché del navegador

## PENDIENTES
### Completado (Fase 1)
- [x] `DataService` con localStorage (getMisFiguritas, pegarFigurita, abrirSobre, yaAbrioHoy)
- [x] Render de casilleros state-aware (consulta misFiguritasPegadas/Sueltas)
- [x] Progreso dinámico en main-view (% real basado en pegadas / total)
- [x] Pack opening modal (sobre cerrado → revelar 1x1 → VER TODAS → ACEPTAR)
- [x] Pilón panel (dropdown desde arriba, grilla de sueltas, irAPegar con highlight)
- [x] Badge contador en bottom nav mobile y header desktop
- [x] State refresh desde localStorage al abrir pilón
- [x] Re-render automático del panel al pegar mientras está abierto
- [x] Animaciones: shimmer dorado, partículas titilantes, glow pulsante en album card
- [x] Transición crossfade puro entre páginas del álbum (sin desplazamiento)
- [x] Clase `.album-page` para position: absolute permanente en páginas del álbum
- [x] Eliminación de `slide-stage` y animaciones con movimiento horizontal
- [x] Simplificación de `toggleAlbum()` a toggle de `hidden-view`
- [x] Countdown hasta medianoche
- [x] Modo prueba (sin límite diario)
- [x] Split monolítico a tres archivos (index.html / app.js / styles.css)
- [x] Modal de perfil (username dinámico, avatar, email, member-since)
- [x] Modal de stats (pegadas, sueltas, páginas completadas, rareza)

### Completado (Fase 2)
- [x] Bucket `images-album` creado y público con stickers comprimidos
- [x] Tabla `figuritas` seedeada con 20 rows (categoria: campeones)
- [x] RLS policies para lectura pública de `figuritas` y storage
- [x] Anon key real configurada en frontend
- [x] `stickers{}` migrado a bucket URLs (sin rutas locales hardcodeadas)
- [x] Helpers `getStickerUrl()`, `getEmptyUrl()`, `STICKER_FILE_IDS` creados
- [x] Bug fix: `reRenderAlbum()` sin innerHTML (solo actualiza data-state)
- [x] Bug fix: `hidden` class duplicada eliminada de páginas del álbum

### Completado (Fase 2 — migración terminada)
- [x] Reemplazar DataService por llamadas Supabase
- [x] RPC `abrir_sobre_diario()` en SQL Editor
- [x] CRUD en `album_usuarios` (insert al abrir sobre, update al pegar)
- [x] Control `ultimo_sobre` desde servidor
- [x] Login con Supabase Auth (registro / inicio de sesión)
- [x] Perfil de usuario desde `perfiles` + `auth.users`
- [x] Bug fix: `getMisFiguritas()` escribe arrays vacíos si Supabase devuelve [] (DELETE sync)
- [x] Bug fix: sticker fantasma `special-2` eliminado de `stickers{}` (progreso llegaba al 98% max)
- [x] UI: Header desktop con Pilón icono 28px + label 14px, botón "Progreso" agregado
- [x] Loading screen: escudo 150x150px, spinner 60px
- [x] `vercel.json` creado para deploy en Vercel
- [x] Archivo `index.html` restaurado a versión completa (se había revertido)
- [x] Auth guard en init: redirige a /login.html si no hay sesión
- [x] Subida de avatar vía Canvas 120px + base64 WebP a perfiles.avatar_url

### Pendiente (post-v1)
- [ ] Reset de contraseña via `supabase.auth.resetPasswordForEmail()`
- [ ] Service Worker para cachear imágenes del bucket (cache-first)

### Completado (Fase 3)
- [x] Agregadas 50 stickers nuevos (IDs 20–69: 33 actuales + 17 promesas)
- [x] Agregadas 5 páginas nuevas al álbum (págs. 3–5 actuales + specials 50/51/52, 6–7 promesas)
- [x] Sistema de navegación adaptado automáticamente (prev/next dinámico)
- [x] `renderStats()` dinámico por categoría (ya no hardcodeado)
- [x] `watermarkSrc` condicional en páginas sin watermark
- [x] Nuevas páginas sin sidebar/photo/specialSticker (solo grilla)

### Completado (Deploy)
- [x] Migración de index.html y login.html a la raíz del proyecto
- [x] Paths de assets corregidos (../ eliminados)
- [x] vercel.json apunta a /index.html

### Completado (Post-deploy — layout + rendimiento)
- [x] Ajuste proporcional de sizing del álbum para 100% zoom (zafable visualmente)
- [x] Empty images migradas de local a bucket `images-album/figuritasVacias/` (comprimidas con pngquant)
- [x] `getEmptyUrl()` apunta al bucket en vez de archivo local
- [x] Prefetch dinámico de vacías durante loading screen (`rel="prefetch"`)
- [x] Watermark condicional en páginas sin `watermarkSrc` (elimina `<img src="undefined">`)
- [x] CSS cleanup: merge `.album-page-container` (3→1), removido CSS muerto (slide classes, keyframes, .profile-modal-avatar)

### Completado (Fase 4 — Landscape Responsive + Estabilidad)
- [x] Landscape forzado: overlay `#rotate-overlay` (z-[9999]) en portrait mobile, sin opción "Enter anyway"
- [x] Media query `@media (orientation: landscape) and (max-height: 450px)` para todas las vistas
- [x] Sizing compacto: header reducido, home cards 260×280, sticker slots 100px max-height
- [x] Special stickers (copa, escudos, 50/51/52) visibles en columna izquierda 70px en landscape
- [x] Todos los modals adaptados: pack, stats, profile, pilon, share, completion
- [x] Bottom nav oculto en landscape, botones desktop visibles
- [x] Límite diario real restaurado (1 sobre/día, resetea 00:00, estilo Panini)
- [x] `checkDailyPack()` async con verificación real Supabase
- [x] Orientation handler con debounce (150ms resize / 300ms orientationchange)
- [x] Timeout 10s en Supabase client (AbortController)
- [x] Flag `isPasting` previene race condition en pasteSticker()
- [x] Toast + console.error en catch de abrirSobre() y otros bloques críticos
- [x] `logout()` limpia profileData + misFiguritasPegadas/Sueltas + localStorage.clear()
- [x] `logout()` usa signOut global (sin scope:local)
- [x] `.single()` → `.maybeSingle()` en getProfile
- [x] Enter key en inputs de login (keydown → handleSubmit)
- [x] Serverless API eliminado (`/api/sticker/[id].js`, `package.json`)
- [x] `STICKER_FILE_IDS` eliminado (dead code)
- [x] Mensajes de compartir sin emojis (compatibilidad multiplataforma)
- [x] Numeración dinámica "1 de N" en pack (en vez de "DE 5" hardcodeado)
- [x] Album card usa `assets/portada-album.png` local (sin Google Drive)
- [x] setTimeouts redundantes eliminados (toggleAlbum)
- [x] safeSetJSON movido dentro del try en abrirSobre (fallback a localStorage en catch)

### Completado (Fase 5 — Accesibilidad + SEO)
- [x] Meta tags Open Graph (title, description, image, url, type) en `index.html`
- [x] Alt text dinámico con nombre real del sticker en álbum, compartir y modal
- [x] h1 duplicado en overlay de rotación corregido a `<p>`
- [x] Focus visible global (`*:focus-visible` outline dorado)
- [x] `role="status" aria-live="polite"` en toast
- [x] `aria-label="Cerrar"` en todos los botones close icon-only
- [x] `role="alert"` en error de login
- [x] `<form>` + labels `sr-only` en inputs de login
- [x] Favicon agregado a `login.html`
- [x] `robots.txt` creado en raíz (Allow: /)
- [x] Footer desktop restaurado + footer dentro de `#rotate-overlay` con estilo compacto

## NOTAS CRÍTICAS
- Páginas del álbum: siempre tienen `.album-page` (`position: absolute; top:0; left:0; right:0`). Nunca cambian de posición.
- Transición entre páginas: crossfade puro, sin movimiento. Clases en uso: `hidden-view` + `.view-transition{opacity}`.
- NO hay clases `slide-stage`, `slide-in-*`, `slide-out-*` en el código actual.
- `hidden-view` class: `opacity: 0; pointer-events: none; position: absolute !important;`
- El pilón panel usa clases `.pilon-panel` (oculto por defecto) y `.pilon-panel.open` (visible con transición CSS)
- `reRenderAlbum()` actualiza `data-state` de cada slot sin reconstruir el DOM (innerHTML ya no se usa)
- `updatePilonCounter()` usa `querySelectorAll('.pilon-badge')` para actualizar badges mobile + desktop
- No hay límite diario en modo prueba (`checkDailyPack()` siempre habilita el botón)
- Las imágenes de stickers se sirven desde `https://wumpbrsnzoybwszjsbwv.supabase.co/storage/v1/object/public/images-album/stickers/{id}.png`
- Los casilleros vacíos se sirven desde el mismo bucket: `images-album/figuritasVacias/{id}.png` (comprimidas con pngquant, prefetch dinámico en loading screen)
- `campeones2017/` ya no es necesario para el runtime (las imágenes van desde el bucket)
- La anon key está hardcodeada en `app.js` (no debe compartirse públicamente, pero la de este proyecto es específica para este bucket público)
- El avatar se guarda como data URI base64 en `perfiles.avatar_url` (sin usar Storage)
- Alias en vercel.json: rewrite `/(.*)` → `/index.html` para SPA routing
