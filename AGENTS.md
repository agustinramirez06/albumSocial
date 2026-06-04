# CSYDP ÁLBUM DIGITAL

Proyecto de álbum de figuritas virtual del **Club Social y Deportivo Pila (CSYDP)**.
Álbum de figuritas con temática de los campeonatos del club (2017, jugadores actuales, promesas, escudos históricos).

## ESTRUCTURA DEL PROYECTO

```
/
├── index/
│   ├── index.html          # App NUEVA (Tailwind dark, diseño moderno, activa)
│   ├── index2.html         # Copia / respaldo de index.html (usa mismas localStorage keys)
│   └── login.html          # App VIEJA (login con Supabase, css simple)
├── App/
│   └── login.js            # Solo tiene cambiarPantalla()
├── Styles/
│   └── login.css           # Estilos de la app vieja
├── campeones2017/          # Imágenes de figuritas (0.png a 19.png) + fotos
├── figuritas2017/          # Otras imágenes de figuritas
├── figuritasVacias/        # Imágenes de casilleros vacíos (0.png a 19.png)
├── jugadores Actuales/     # Fotos de jugadores actuales
├── promesas/               # Fotos de juveniles / promesas
├── escudos-historicos/     # Escudos del club (viejo, intermedio, actual)
└── assets/                 # Sobres y recursos generales
```

## STACK

- HTML5 + CSS3 + Vanilla JS
- Tailwind CSS (vía CDN con tailwind.config inline)
- Google Fonts: Anybody, Hanken Grotesk, JetBrains Mono
- Material Symbols (iconos)
- **Sin frameworks ni build tools**

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

### FASE 2 (futuro) — Integración Supabase
- Reemplazar `DataService` (localStorage) por llamadas Supabase
- RPC `abrir_sobre_diario()` para obtener 5 figuritas diarias
- CRUD en tabla `album_usuarios` (insertar al abrir sobre, update al pegar)
- Control de `ultimo_sobre` en tabla `perfiles`
- Login con Supabase Auth
- Perfil de usuario con username, email, avatar y fecha de registro
- El frontend ya está preparado con `DataService` como capa de abstracción

## BASE DE DATOS (Supabase — para Fase 2)

### `figuritas`
| Columna     | Tipo   | Descripción                        |
|-------------|--------|------------------------------------|
| id          | bigint | Número fijo de figurita (PK)       |
| nombre      | text   | Nombre del jugador/elemento        |
| categoria   | text   | comun / historica / especial       |
| imagen_url  | text   | URL de la imagen de la figurita    |

### `perfiles`
| Columna      | Tipo         | Descripción                              |
|--------------|--------------|------------------------------------------|
| id           | uuid         | PK, FK a auth.users (default auth.uid()) |
| username     | text         | Nombre de usuario                        |
| avatar_url   | text         | URL de la foto de perfil (nullable)      |
| ultimo_sobre | date         | Fecha de la última vez que abrió sobre   |
| created_at   | timestamptz  | Fecha de registro (default now())        |

### `album_usuarios`
| Columna      | Tipo    | Descripción                               |
|--------------|---------|-------------------------------------------|
| id           | bigint  | Auto-incremental (PK)                     |
| id_usuario   | uuid    | FK a perfiles                             |
| id_figurita  | bigint  | FK a figuritas                            |
| esta_pegada  | boolean | false = suelta, true = pegada (def: false)|

## APP NUEVA (`index.html`) — ARQUITECTURA

### Estructura del HTML
- **Header** fijo con logo + botón Pilón desktop + perfil de usuario (placeholder)
- **Main View** (`#main-view`): pantalla de inicio con cards de "Sobre Diario" y "Mi Colección"
- **Album Pages** (`#album-page-1`, `#album-page-2`): renderizadas dinámicamente por JS
- **Pack Modal** (`#pack-modal`): overlay con 3 pasos (cerrado, revelar, completo)
- **Pilón Overlay** (`#pilon-overlay`) + **Pilón Panel** (`#pilon-panel`): dropdown desde arriba con grilla de sueltas
- **Bottom Nav** (mobile): Home, Álbum, Pilón, Profile

### Sistema de Vistas (SPA)
- Las vistas se ocultan/muestran con clases CSS: `hidden-view`, `slide-stage`
- `currentView` trackea la vista activa
- `toggleAlbum(pageId, direction)`: navegación entre main-view y páginas del álbum
- `goToHome()`: vuelve a main-view

### Datos de Figuritas (`stickers{}`)
Objeto clave-valor donde key = ID (string), value = `{ nombre, categoria, img, empty }`.
IDs usan strings numéricas ('0'..'18') más 'special-2'.
- `img`: ruta a la imagen a color (`../campeones2017/{id}.png`)
- `empty`: ruta al casillero vacío (`../figuritasVacias/{id}.png`)

### Páginas del Álbum (`albumPages[]`)
Array de objetos con:
- `id`, `title`, `gridCols`, `stickerIds[]`, `specialStickerId`
- `sidebar`: datos del partido (tipo match con score, goleadores)
- `photo`: imagen + label
- `pageLabel`

Actualmente 2 páginas:
1. Campeones Clausura 2017 (stickerIds 1-10, especial: copa 0)
2. Campeones Clausura 2017 (stickerIds 11-18 + 15, especial: escudo histórico)

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
- `renderStickerSlot(id)`: genera HTML del casillero (consulta misFiguritasPegadas/Sueltas)
- `renderAlbumPage(page)`: renderiza página completa del álbum
- `renderSidebar(sidebar)`: renderiza info del partido
- `renderPhoto(photo)`: renderiza foto
- `renderNavButtons(pageId)`: botones Anterior/Siguiente

#### Navegación
- `toggleAlbum(pageId, direction)`: navega entre main-view y páginas del álbum (con slide)
- `goToHome()`: vuelve a main-view

#### Pack Opening
- `abrirSobre()`: orquesta apertura (DataService → actualiza estado → modal)
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

#### Progreso
- `calcularProgreso()`: % de pegadas sobre total
- `updateProgressBar()`: actualiza texto y barra en main-view

#### Utilidades
- `updateTimer()`: countdown hasta medianoche
- `checkDailyPack()`: modo prueba (siempre habilita botón)
- `reRenderAlbum()`: re-renderiza todas las páginas del álbum
- `initState()`: carga estado desde DataService (localStorage)

### Countdown
`setInterval(updateTimer, 1000)` calcula tiempo hasta medianoche.
**Fase 2**: debe reemplazarse por lógica contra `ultimo_sobre` del perfil + fecha servidor.

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
- Sin librerías externas (excepto Supabase SDK en Fase 2)

## PATRONES IMPORTANTES

### Capa de Datos (DataService)
Implementado con localStorage. Para Fase 2 solo se cambia la implementación:

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
2. `pasteSticker()`: verifica que el ID esté en `misFiguritasSueltas`
3. `DataService.pegarFigurita(id)`: actualiza localStorage
4. JS splitea de `misFiguritasSueltas` y pushea a `misFiguritasPegadas`
5. `slot.dataset.state = 'imagen'` + animación glow dorado
6. `updateProgressBar()` + `updatePilonCounter()`
7. En Fase 2: `DataService.pegarFigurita()` también hará `update()` en Supabase `album_usuarios`

### Nota sobre index2.html
`index2.html` usa las mismas keys de localStorage (`csydp_pegadas`, etc.), por lo que los datos se comparten entre ambos archivos. No representa un problema funcional, pero puede causar confusión al probar.

## COMANDOS
- No hay build system ni package.json (frontend vanilla)
- Para desarrollo: abrir `index.html` en navegador
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
- [x] Countdown hasta medianoche
- [x] Modo prueba (sin límite diario)

### Pendiente (Fase 2)
- [ ] Reemplazar DataService por llamadas Supabase
- [ ] Login con Supabase Auth
- [ ] RPC `abrir_sobre_diario()`
- [ ] CRUD en `album_usuarios`
- [ ] Control `ultimo_sobre` desde servidor
- [ ] Restaurar `checkDailyPack()` con límite real
- [ ] Perfil de usuario desde Supabase (`perfiles` + `auth.users`)
- [ ] Avatar upload a Supabase Storage bucket `avatars`
- [ ] Reset de contraseña via `supabase.auth.resetPasswordForEmail()`

## NOTAS CRÍTICAS
- `hidden-view` class: `opacity: 0; pointer-events: none; position: absolute !important;`
- El pilón panel usa clases `.pilon-panel` (oculto por defecto) y `.pilon-panel.open` (visible con transición CSS)
- `reRenderAlbum()` se llama después de `abrirSobre()` para que los nuevos stickers muestren "PEGAR"
- `updatePilonCounter()` usa `querySelectorAll('.pilon-badge')` para actualizar badges mobile + desktop
- No hay límite diario en modo prueba (`checkDailyPack()` siempre habilita el botón)
