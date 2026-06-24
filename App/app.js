// ===================== DATA LAYER =====================

const stickers = {
  '0':  { nombre: 'Copa Clausura 2017',  categoria: 'campeones' },
  '1':  { nombre: 'Mandrake Pereyra',  categoria: 'campeones' },
  '2':  { nombre: 'Toto Gonzalez',  categoria: 'campeones' },
  '3':  { nombre: 'Renzo Menconi',  categoria: 'campeones' },
  '4':  { nombre: 'Alan Vargas',  categoria: 'campeones' },
  '5':  { nombre: 'Ramiro Ceberio',  categoria: 'campeones' },
  '6':  { nombre: 'Kelo Gutierrez',  categoria: 'campeones' },
  '7':  { nombre: 'Mauro Orlando',  categoria: 'campeones' },
  '8':  { nombre: 'Juan Varela',  categoria: 'campeones' },
  '9':  { nombre: 'Cristian Durante',  categoria: 'campeones' },
  '10': { nombre: 'Santiago De Leon', categoria: 'campeones' },
  '11': { nombre: 'Joe Niella', categoria: 'campeones' },
  '12': { nombre: 'Kika Pereyra', categoria: 'campeones' },
  '13': { nombre: 'Mono Martinez', categoria: 'campeones' },
  '14': { nombre: 'Maximiliano Vallejo', categoria: 'campeones' },
  '15': { nombre: 'Nicolas Castaño', categoria: 'campeones' },
  '16': { nombre: 'Braian Acuña', categoria: 'campeones' },
  '17': { nombre: 'Juan Cruz Arias', categoria: 'campeones' },
  '18': { nombre: 'Nicolas Mandau', categoria: 'campeones' },
  '19': { nombre: 'Cuerpo Tecnico', categoria: 'campeones' },
  '20': { nombre: 'Agustin Ramirez', categoria: 'actuales' },
  '21': { nombre: 'Mateo Iturreria', categoria: 'actuales' },
  '22': { nombre: 'Agustin Ripodas', categoria: 'actuales' },
  '23': { nombre: 'Alvaro Esposito', categoria: 'actuales' },
  '24': { nombre: 'Axel Broqua', categoria: 'actuales' },
  '25': { nombre: 'Mateo Santalucia', categoria: 'actuales' },
  '26': { nombre: 'Agustin Zuleta', categoria: 'actuales' },
  '27': { nombre: 'Maximiliano Ledesma', categoria: 'actuales' },
  '28': { nombre: 'Gaston Luero', categoria: 'actuales' },
  '29': { nombre: 'Rodrigo Gallo', categoria: 'actuales' },
  '30': { nombre: 'Juan Cruz Bercetche', categoria: 'actuales' },
  '31': { nombre: 'Ivan Lescano', categoria: 'actuales' },
  '32': { nombre: 'Lucas Etchemendy', categoria: 'actuales' },
  '33': { nombre: 'Jeremias Fondovila', categoria: 'actuales' },
  '34': { nombre: 'Joaquin Minghetti', categoria: 'actuales' },
  '35': { nombre: 'Ramiro Arias', categoria: 'actuales' },
  '36': { nombre: 'Gonzalo Medina', categoria: 'actuales' },
  '38': { nombre: 'Fernando Fariña', categoria: 'actuales' },
  '39': { nombre: 'Agustin Oroe', categoria: 'actuales' },
  '40': { nombre: 'Martin Menchacabazo', categoria: 'actuales' },
  '41': { nombre: 'Enrique Zelaya', categoria: 'actuales' },
  '42': { nombre: 'Bautista Chesini', categoria: 'actuales' },
  '43': { nombre: 'Juan Perez', categoria: 'actuales' },
  '44': { nombre: 'Marcos Gutierrez', categoria: 'actuales' },
  '45': { nombre: 'Cristopher Hermida', categoria: 'actuales' },
  '46': { nombre: 'Demian Tort', categoria: 'actuales' },
  '47': { nombre: 'Juan Roman De Leon', categoria: 'actuales' },
  '48': { nombre: 'Chapa Medina', categoria: 'actuales' },
  '49': { nombre: 'Pola Ottaviano', categoria: 'actuales' },
  '50': { nombre: 'Coco Esposito', categoria: 'actuales' },
  '51': { nombre: 'Parry', categoria: 'actuales' },
  '52': { nombre: 'Tomas Bedoya', categoria: 'actuales' },
  '53': { nombre: 'Elian Hermida', categoria: 'promesas' },
  '54': { nombre: 'Ariel Solis', categoria: 'promesas' },
  '55': { nombre: 'Santino Ruiz', categoria: 'promesas' },
  '56': { nombre: 'Joaquin Lazarte', categoria: 'promesas' },
  '57': { nombre: 'Joaquin Bolondrade', categoria: 'promesas' },
  '58': { nombre: 'Joaquin Castell', categoria: 'promesas' },
  '59': { nombre: 'Mateo Montenero', categoria: 'promesas' },
  '60': { nombre: 'Rodrigo Minho', categoria: 'promesas' },
  '61': { nombre: 'Santiago Andrade', categoria: 'promesas' },
  '62': { nombre: 'Matias Lezcano', categoria: 'promesas' },
  '63': { nombre: 'Thiago De Felipe', categoria: 'promesas' },
  '64': { nombre: 'Luciano Fredes', categoria: 'promesas' },
  '65': { nombre: 'Santos Donizzetti', categoria: 'promesas' },
  '66': { nombre: 'Valentino Fuertes', categoria: 'promesas' },
  '67': { nombre: 'Nazareno Balcedo', categoria: 'promesas' },
  '68': { nombre: 'Manuel Maceira', categoria: 'promesas' },
  '69': { nombre: 'Matias Pereyra', categoria: 'promesas' },
  '70': { nombre: 'Final Primera 2010', categoria: 'historicas' },
  '71': { nombre: 'Campeon 3era 2006', categoria: 'historicas' },
  '72': { nombre: 'Tercer Puesto 2005', categoria: 'historicas' },
  '73': { nombre: 'Final en 5ta division 2002', categoria: 'historicas' },
  '74': { nombre: 'Triangular 4ta division 2022', categoria: 'historicas' },
  '75': { nombre: 'Comision Directiva', categoria: 'historicas' }
};


const albumPages = [
  {
    id: 1,
    title: 'Campeones Torneo clausura 2017',
    gridCols: 5,
    stickerIds: ['1','2','3','4','5','6','7','8','9','10'],
    specialStickerId: '0',
    watermarkSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUb0gIUWWKRZ_P8gq1cuBUpRZVyCHtVYw6XbglfJrvmVq4EmasaYhVwIOw3JpiEQf7n4kq7hwfgb9yq7XayYOMv9pYhvjzVCG9nugppzJI9Sr3OghKT9L5dMB9RsojSr0xbUoinznCQurikZKWXmdvXmQo7Tg40LlnmZ2rI7JXGXZUvjYn91R3jRL4KcEEixzVvhhBU69EqIMaP-xODb6lwYrPkpv7LhbqfuBRvmzVHsT0eViQzwkb4vlmhqBfLScGA1cbGkX3D4l7',
    sidebar: { type: 'match', title: 'Final Ida 18/12/2017 CSYDP vs UNION Vecinal De Etcheverry', score: 'CSYDP 3-2 Union Vecinal De Etcheverry', goals: ['K.Gutierrez','K.Gutierrez','M.Orlando'] },
    photo: { src: '../assets/final-ida.jpg', label: 'FINAL IDA 2017' },
    pageLabel: 'HOJA 1'
  },
  {
    id: 2,
    title: 'Campeones Torneo clausura 2017',
    gridCols: 5,
    stickerIds: ['11','12','13','14','16','17','18','15'],
    specialStickerId: '19',
    watermarkSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASCyPMrX1cHc_oTSaExBwNKqw0eUuIzg7W4j6trAzS9blJFPQU2MA9l7WC6CHC75mk4cADJWwI0PYSGbrgP3ReWJP65U0w-kg5SoeymXEzGfq0OQJGXeqGezkC1fZz2oVOu7qK03qGnO7sXOqa6XF8OUWHxlkAlKUZfrBVjBUiKEUxs_Io8VE8gxSzcMyxLAlCSBgwITzWFDByo8r7kDkXjfEUU6xF0tLKkfRX3HUSGmnivd_kjBWQ5NCWde0ILdMGJWKtkE_a6kQR',
    sidebar: { type: 'match', title: 'Final Vuelta 23/12/2017 CSYDP vs UNION Vecinal De Etcheverry', score: 'CSYDP 2-2 Union Vecinal De Etcheverry', goals: ['M.Orlando','M.Orlando'] },
    photo: { src: 'assets/final-vuelta.jpg', label: 'FINAL VUELTA 2017' },
    videoUrl: 'https://www.youtube.com/watch?v=wnRJ7dm_O_U',
    videoLabel: 'Ver Video Final 2017',
    videoCol: 4,
    pageLabel: 'HOJA 2'  },
    
  {
    id: 3,
    title: 'Jugadores Actuales',
    gridCols: 5,
    stickerIds: ['20','21','22','23','24','25','26','27','28','29'],
    specialStickerId: '50',
    watermarkSrc: 'assets/social-escudo-estrelladorada.png',
    sidebar: null,
    photo: null,
    pageLabel: 'HOJA 3'
  },
  {
    id: 4,
    title: 'Jugadores Actuales',
    gridCols: 5,
    stickerIds: ['30','31','32','33','34','35','36','38','39'],
    specialStickerId: '51',
    watermarkSrc: 'assets/social-escudo-estrelladorada.png',
    sidebar: null,
    photo: null,
    pageLabel: 'HOJA 4'
  },
  {
    id: 5,
    title: 'Jugadores Actuales',
    gridCols: 5,
    stickerIds: ['40','41','42','43','44','45','46','47','48','49'],
    specialStickerId: '52',
    watermarkSrc: 'assets/social-escudo-estrelladorada.png',
    sidebar: null,
    photo: null,
    pageLabel: 'HOJA 5'
  },
  {
    id: 6,
    title: 'Promesas CSYDP',
    gridCols: 5,
    stickerIds: ['53','54','55','56','57','58','59','60','61','62'],
    specialStickerId: null,
    watermarkSrc: 'assets/social-escudo-estrelladorada.png',
    sidebar: null,
    photo: null,
    pageLabel: 'HOJA 6'
  },
  {
    id: 7,
    title: 'Promesas CSYDP',
    gridCols: 5,
    stickerIds: ['63','64','65','66','67','68','69'],
    specialStickerId: null,
    watermarkSrc: 'assets/social-escudo-estrelladorada.png',
    sidebar: null,
    photo: null,
    pageLabel: 'HOJA 7'
  },
  {
    id: 8,
    title: 'Momentos Destacados',
    gridCols: 3,
    stickerIds: ['70','71','72','73','74','75'],
    specialStickerId: null,
    watermarkSrc: 'assets/social-escudo-estrelladorada.png',
    sidebar: null,
    photo: null,
    pageLabel: 'HOJA 8',
    stickerDescriptions: {
      '70': 'Final del torneo clausura 2010 CSYDP (1-3) Racing de Bavio.',
      '71': 'Campeonato de la tercera division en 2006 CSYDP (4-1) empalme de san vicente.',
      '72': '3er Puesto en Primera division torneo Apertura 2005 CSYDP (1-2) Progreso de Brandsen.',
      '73': 'Final en 5ta division CSYDP (3-3) Atletico chascomus Cat 88/87 pierde el CSYDP penales.',
      '74': 'triangular final año 2022 CSYDP, El Salado y Napoli Argentino.',
      '75': 'Parte de la comision directiva del CSDYP.'
    },
    stickerVideos: {
      '73': 'https://www.facebook.com/share/v/1K6yiAhidM/'
    },
    stickerVideoLabels: {
      '73': 'Ver Video final 5ta Division'
    }
  }
];

// ===================== SAFE STORAGE HELPERS =====================

function todayLocal() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function safeGetJSON(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function safeSetJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

// ===================== DATA SERVICE =====================

const DataService = {
  STORAGE_PEGADAS: 'csydp_pegadas',
  STORAGE_SUELTAS: 'csydp_sueltas',
  STORAGE_ULTIMO_SOBRE: 'csydp_ultimo_sobre',
  STORAGE_PROFILE: 'csydp_profile',

  async getMisFiguritas() {
    try {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (user) {
        const { data } = await supabaseClient
          .from('album_usuarios')
          .select('id_figurita, esta_pegada')
          .eq('id_usuario', user.id);
        if (data) {
          const pegadas = data.filter(r => r.esta_pegada).map(r => String(r.id_figurita));
          const sueltas = data.filter(r => !r.esta_pegada).map(r => String(r.id_figurita));
          safeSetJSON(this.STORAGE_PEGADAS, pegadas);
          safeSetJSON(this.STORAGE_SUELTAS, sueltas);
          return { pegadas, sueltas };
        }
      }
    } catch {}
    return {
      pegadas: safeGetJSON(this.STORAGE_PEGADAS, []),
      sueltas: safeGetJSON(this.STORAGE_SUELTAS, [])
    };
  },

  async pegarFigurita(figuritaId) {
    const idStr = String(figuritaId);
    let sueltas = safeGetJSON(this.STORAGE_SUELTAS, []);
    let pegadas = safeGetJSON(this.STORAGE_PEGADAS, []);
    const idx = sueltas.indexOf(idStr);
    if (idx === -1) return false;
    sueltas.splice(idx, 1);
    if (!pegadas.includes(idStr)) pegadas.push(idStr);
    try {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (user) {
        const numId = parseInt(idStr, 10);
        const { data: existing } = await supabaseClient
          .from('album_usuarios')
          .select('id')
          .eq('id_usuario', user.id)
          .eq('id_figurita', numId);
        if (existing && existing.length > 0) {
          await supabaseClient
            .from('album_usuarios')
            .update({ esta_pegada: true })
            .eq('id_usuario', user.id)
            .eq('id_figurita', numId);
        } else {
          await supabaseClient
            .from('album_usuarios')
            .insert({ id_usuario: user.id, id_figurita: numId, esta_pegada: true });
        }
      }
    } catch {}
    safeSetJSON(this.STORAGE_SUELTAS, sueltas);
    safeSetJSON(this.STORAGE_PEGADAS, pegadas);
    return true;
  },

  async abrirSobre() {
    const pegadas = safeGetJSON(this.STORAGE_PEGADAS, []);
    const sueltas = safeGetJSON(this.STORAGE_SUELTAS, []);
    const yaTiene = new Set([...pegadas, ...sueltas]);

    const porCategoria = {};
    for (const [id, s] of Object.entries(stickers)) {
      if (yaTiene.has(id)) continue;
      if (!porCategoria[s.categoria]) porCategoria[s.categoria] = [];
      porCategoria[s.categoria].push(id);
    }

    const todasFaltantes = Object.values(porCategoria).flat();
    if (todasFaltantes.length === 0) throw new Error('Completaste el álbum');

    const nuevas = [];
    for (let i = 0; i < 5 && todasFaltantes.length > 0; i++) {
      const idx = Math.floor(Math.random() * todasFaltantes.length);
      nuevas.push(todasFaltantes.splice(idx, 1)[0]);
    }

    for (const id of nuevas) {
      if (!sueltas.includes(id)) sueltas.push(id);
    }

    try {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (user && nuevas.length > 0) {
        const inserts = nuevas.map(id => ({
          id_usuario: user.id,
          id_figurita: parseInt(id, 10),
          esta_pegada: false
        }));
        await supabaseClient.from('album_usuarios').insert(inserts);
        await supabaseClient
          .from('perfiles')
          .update({ ultimo_sobre: todayLocal() })
          .eq('id', user.id);
      }
      safeSetJSON(this.STORAGE_SUELTAS, sueltas);
      safeSetJSON(this.STORAGE_ULTIMO_SOBRE, todayLocal());
    } catch (e) {
      console.error('Error guardando en Supabase:', e);
      safeSetJSON(this.STORAGE_SUELTAS, sueltas);
      safeSetJSON(this.STORAGE_ULTIMO_SOBRE, todayLocal());
    }
    return nuevas;
  },

  async getProfile() {
    try {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (user) {
        const { data } = await supabaseClient
          .from('perfiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();
        if (data) {
          const profile = {
            username: data.username || user.email?.split('@')[0] || '',
            email: user.email || '',
            avatarUrl: data.avatar_url || DEFAULT_AVATAR,
            memberSince: data.created_at ? new Date(data.created_at).toISOString().split('T')[0] : todayLocal(),
            es_admin: data.es_admin || false
          };
          safeSetJSON(this.STORAGE_PROFILE, profile);
          return profile;
        }
      }
    } catch {}
    return safeGetJSON(this.STORAGE_PROFILE, null);
  },

  async saveProfile(profile) {
    try {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (user) {
        await supabaseClient
          .from('perfiles')
          .update({ username: profile.username, avatar_url: profile.avatarUrl })
          .eq('id', user.id);
      }
    } catch {}
    return safeSetJSON(this.STORAGE_PROFILE, profile);
  },

  async yaAbrioHoy() {
    try {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (user) {
        const { data } = await supabaseClient
          .from('perfiles')
          .select('ultimo_sobre')
          .eq('id', user.id)
          .single();
        if (data?.ultimo_sobre) {
          const today = todayLocal();
          return data.ultimo_sobre === today;
        }
      }
    } catch {}
    try {
      const ultimo = localStorage.getItem(this.STORAGE_ULTIMO_SOBRE);
      return ultimo === todayLocal();
    } catch { return false; }
  }
};

const SUPABASE_URL = 'https://ynlkxjlicngvumygpyfr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlubGt4amxpY25ndnVteWdweWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxODkwODAsImV4cCI6MjA5Nzc2NTA4MH0.uKGQyyBA-KR4shjB0LbQVPJd3LcNkv8H8pwYeVQaT7I';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  global: { fetch: (...args) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    return fetch(...args, { signal: controller.signal }).finally(() => clearTimeout(timeout));
  }}
});
function getStickerUrl(id) {
  return `/images/stickers/${id}.webp`;
}

function getEmptyUrl(id) {
  return `/images/empty/${id}.webp`;
}

const stickerImages = {};
const emptyImages = {};
for (const [id] of Object.entries(stickers)) {
  stickerImages[id] = getStickerUrl(id);
  emptyImages[id] = getEmptyUrl(id);
}

// ===================== STATE =====================

let misFiguritasPegadas = [];
let misFiguritasSueltas = [];
let isOpening = false;
let isPasting = false;

async function initState() {
  const state = await DataService.getMisFiguritas();
  misFiguritasPegadas = state.pegadas;
  misFiguritasSueltas = state.sueltas;
}

function getStickerState(id) {
  if (misFiguritasPegadas.includes(id)) return 'imagen';
  if (misFiguritasSueltas.includes(id)) return 'pegar';
  return 'vacio';
}

// ===================== RENDER FUNCTIONS =====================

function renderStickerSlot(id, description) {
  const s = stickers[id] || { nombre: '' };
  const state = getStickerState(id);
  const imgSrc = stickerImages[id] || '';
  const descOverlay = description ? `<div class="sticker-desc-overlay">${description}</div>` : '';
  return `
<div class="sticker-slot relative flex flex-col items-center justify-center" data-sticker-id="${id}" data-state="${state}">
  <div class="state-vacio absolute inset-0 flex items-center justify-center">
    <img src="${emptyImages[id]}" alt="Vacio" class="w-full h-full object-contain opacity-50 p-0.5" loading="lazy">
  </div>
  <div class="state-pegar absolute inset-0 cursor-pointer" onclick="pasteSticker(this)">
    <img src="${emptyImages[id]}" alt="Vacio" class="w-full h-full object-contain opacity-30 p-0.5">
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="pegar-badge">PEGAR</span>
    </div>
  </div>
  <div class="state-imagen absolute inset-0 cursor-pointer" onclick="abrirStickerModal('${id}')">
    <img src="${imgSrc}" alt="${stickers[id]?.nombre || 'Figurita'}" class="w-full h-full object-contain p-0.5" loading="lazy">
    ${descOverlay}
  </div>
  <div class="state-pegando absolute inset-0 flex items-center justify-center">
    <span class="material-symbols-outlined spin text-secondary-container" style="font-size: 48px;">progress_activity</span>
  </div>
</div>`;
}

function renderSidebar(sidebar) {
  if (sidebar.type === 'match') {
    return `
<div class="glass-panel p-2.5 rounded-lg border-l-4 border-secondary-container">
  <h4 class="font-label-numeric text-[9px] text-white font-bold leading-tight mb-1">${sidebar.title}</h4>
  <p class="text-primary text-[9px] font-bold mb-1">${sidebar.score}</p>
  <ul class="text-[9px] space-y-1">
    ${sidebar.goals.map(g => `
    <li class="flex items-center gap-2 text-secondary">${g} <span class="material-symbols-outlined text-[9px]" style="font-variation-settings: &quot;FILL&quot; 1;">sports_soccer</span></li>
    `).join('')}
  </ul>
</div>`;
  }
  return `
<div class="glass-panel p-2.5 rounded-lg border-l-4 border-secondary-container">
  <h4 class="font-label-numeric text-[9px] text-white font-bold leading-tight mb-1">${sidebar.title}</h4>
  <p class="text-primary text-[9px] font-bold mb-1">${sidebar.subtitle}</p>
  <p class="text-[9px] text-on-surface-variant leading-relaxed">${sidebar.description}</p>
</div>`;
}

function renderPhoto(photo) {
  return `
<div class="w-full aspect-[4/3] bg-surface-container-high border border-white/10 rounded-lg overflow-hidden shadow-inner relative group">
  <img alt="${photo.label}" class="w-full h-full object-cover" src="${photo.src}" loading="lazy">
  <div class="absolute bottom-0 right-0 bg-secondary-container/90 px-2 py-0.5 font-label-numeric text-[8px] text-white">
    ${photo.label}
  </div>
</div>`;
}

function renderVideoLink(url) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="block text-[10px] text-secondary-container hover:brightness-110 transition-all font-label-numeric text-center mt-1 font-bold">▶ VER VIDEO</a>`;
}

function renderNavButtons(pageId) {
  const idx = albumPages.findIndex(p => p.id === pageId);
  const prevPage = idx > 0 ? albumPages[idx - 1].id : 0;
  const nextPage = idx < albumPages.length - 1 ? albumPages[idx + 1].id : null;
  return `
<div class="relative z-10 mt-3 flex justify-center items-center gap-12">
  <button class="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-all group" onclick="toggleAlbum(${prevPage}, 'prev')" type="button">
    <span class="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">undo</span>
    <span class="font-display-lg-mobile text-sm uppercase italic font-bold">Anterior</span>
  </button>
  ${nextPage !== null
    ? `<button class="flex items-center gap-1.5 text-secondary-container hover:brightness-110 transition-all group" onclick="toggleAlbum(${nextPage}, 'next')" type="button">
    <span class="font-display-lg-mobile text-sm uppercase italic font-bold">Siguiente</span>
    <span class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">redo</span>
  </button>`
    : `<button class="flex items-center gap-1.5 text-on-surface-variant/30 cursor-not-allowed transition-all group" type="button">
    <span class="font-display-lg-mobile text-sm uppercase italic font-bold">Siguiente</span>
    <span class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">redo</span>
  </button>`
  }
</div>
<div class="mt-3 text-center text-[9px] font-label-numeric text-white/40 uppercase tracking-widest">
  ${albumPages.find(p => p.id === pageId)?.pageLabel || ''}
</div>`;
}

function renderAlbumPage(page) {
  const leftCol = page.specialStickerId
    ? `<div class="w-full lg:w-36 flex-shrink-0 flex justify-center"><div class="w-36">${renderStickerSlot(page.specialStickerId)}</div></div>`
    : `<div class="hidden lg:block lg:w-36 flex-shrink-0"></div>`;
  const rightCol = (page.sidebar || page.photo)
    ? `<div class="w-full lg:w-56 flex-shrink-0 space-y-4">${page.sidebar ? renderSidebar(page.sidebar) : ''}${page.photo ? renderPhoto(page.photo) : ''}${page.videoUrl ? renderVideoLink(page.videoUrl) : ''}</div>`
    : `<div class="hidden lg:block lg:w-56 flex-shrink-0"></div>`;
  return `
<div class="max-w-[1100px] mx-auto album-page-container rounded-xl shadow-2xl p-1.5 min-h-[300px]">
  ${page.watermarkSrc ? `<img alt="Background Shield" class="watermark-shield" src="${page.watermarkSrc}">` : ''}
  <div class="crease hidden md:block"></div>
  <button class="absolute top-4 right-4 z-20 text-on-surface-variant hover:text-primary transition-colors" onclick="goToHome()" type="button">
    <span class="material-symbols-outlined text-3xl">arrow_back</span>
  </button>
  <header class="relative z-10 text-center mb-2">
    <h2 class="font-display-lg text-[20px] text-primary uppercase tracking-tight border-b-2 border-secondary-container inline-block pb-0.5">
      ${page.title}
    </h2>
  </header>
  <div class="relative z-10 mt-10 flex flex-col lg:flex-row gap-2 items-start justify-between">
    ${leftCol}
    <div class="flex-grow min-w-0">
      <div class="album-grid" style="--grid-cols: ${page.gridCols}">
        ${page.stickerIds.map(id => {
          const desc = page.stickerDescriptions?.[id] || '';
          return renderStickerSlot(id, desc);
        }).join('')}
        ${page.videoCol ? `<a href="${page.videoUrl}" target="_blank" rel="noopener noreferrer" style="grid-column: ${page.videoCol}; align-items:center; justify-content:center;" class="text-secondary-container hover:brightness-110 transition-all font-label-numeric text-[10px] font-bold p-2">▶ ${page.videoLabel || 'Ver Video'}</a>` : ''}
      </div>
      ${page.stickerVideos ? (() => {
        const cols = page.gridCols || 3;
        const links = Object.entries(page.stickerVideos).map(([id, url]) => {
          const idx = page.stickerIds.indexOf(id);
          const col = (idx % cols) + 1;
          const name = page.stickerVideoLabels?.[id] || stickers[id]?.nombre || id;
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="grid-column: ${col};" class="text-secondary-container hover:brightness-110 transition-all font-label-numeric text-[10px] font-bold">▶ ${name}</a>`;
        });
        return `<div class="grid mt-2 pt-1.5 border-t border-white/10" style="grid-template-columns: repeat(${cols}, minmax(0, 1fr)); gap: 0.375rem;">${links.join('')}</div>`;
      })() : ''}
    </div>
    ${rightCol}
  </div>
  ${renderNavButtons(page.id)}
</div>`;
}

// ===================== VIEW TOGGLING =====================

let currentView = 'main-view';

function toggleAlbum(pageId, direction) {
  const currentEl = document.getElementById(currentView);
  const target = pageId === 0
    ? document.getElementById('main-view')
    : document.getElementById(`album-page-${pageId}`);

  if (!target || target === currentEl) return;

  const isAlbumSlide = direction && currentEl.id.includes('album-page') && target.id.includes('album-page');

  if (isAlbumSlide) {
    target.classList.remove('hidden-view');
    currentEl.classList.add('hidden-view');
    currentView = target.id;
  } else {
    const views = [document.getElementById('main-view')];
    albumPages.forEach(p => views.push(document.getElementById(`album-page-${p.id}`)));

    views.forEach(v => {
      if (v && v !== target) {
        v.classList.add('hidden-view');
      }
    });

    target.classList.remove('hidden-view');
    currentView = target.id;
  }
}

function goToHome() {
  if (currentView !== 'main-view') {
    toggleAlbum(0);
    setTimeout(async () => {
      const state = await DataService.getMisFiguritas();
      misFiguritasPegadas = state.pegadas;
      misFiguritasSueltas = state.sueltas;
      updateProgressBar();
      updatePilonCounter();
    }, 150);
  }
}

// ===================== COUNTDOWN TIMER =====================

function updateTimer() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diffMs = midnight - now;
  const hours = Math.floor(diffMs / 3600000);
  const minutes = Math.floor((diffMs % 3600000) / 60000);
  const seconds = Math.floor((diffMs % 60000) / 1000);
  const timerString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const cd = document.getElementById('countdown');
  if (cd) cd.innerText = timerString;
}
setInterval(updateTimer, 1000);
updateTimer();

// ===================== PROGRESS =====================

function calcularProgreso() {
  const total = Object.keys(stickers).length;
  if (total === 0) return 0;
  return Math.round((misFiguritasPegadas.length / total) * 100);
}

function updateProgressBar() {
  const progreso = calcularProgreso();
  const textEl = document.querySelector('.text-secondary.font-label-numeric');
  const barEl = document.querySelector('.bg-secondary-container.h-full');
  if (textEl) textEl.textContent = `${progreso}% COMPLETADO`;
  if (barEl) barEl.style.width = `${progreso}%`;
}

// ===================== PACK OPENING =====================

let packFiguritas = [];
let packCurrentIndex = 0;
const MAX_PACK_SIZE = 5;

async function abrirSobre() {
  if (isOpening) return;
  if (profileData?.es_admin !== true) {
    const yaAbrio = await DataService.yaAbrioHoy();
    if (yaAbrio) { mostrarToast('❌ Ya abriste tu sobre hoy. Volvé mañana'); return; }
  }
  isOpening = true;

  const btn = document.getElementById('btn-sobre-diario');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="material-symbols-outlined spin">progress_activity</span> ABRIENDO...';
  }

  let nuevas;
  try {
    nuevas = await DataService.abrirSobre();
  } catch (e) {
    console.error('Error al abrir sobre:', e);
    mostrarToast('Error al abrir sobre. Intentalo de nuevo.');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<span class="material-symbols-outlined">auto_awesome</span> OBTENER SOBRE DIARIO';
    }
    isOpening = false;
    return;
  }
  for (const id of nuevas) {
    if (!misFiguritasSueltas.includes(id)) {
      misFiguritasSueltas.push(id);
    }
  }

  packFiguritas = nuevas;
  packCurrentIndex = 0;

  updatePilonCounter();

  document.getElementById('pack-modal').classList.remove('hidden-view');
  document.getElementById('pack-step-closed').classList.remove('hidden-view');
  document.getElementById('pack-step-reveal').classList.add('hidden-view');
  document.getElementById('pack-step-complete').classList.add('hidden-view');

  updateProgressBar();
  reRenderAlbum();

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = '<span class="material-symbols-outlined">auto_awesome</span> OBTENER SOBRE DIARIO';
  }

  isOpening = false;
}

function animarApertura() {
  document.getElementById('pack-step-closed').classList.add('hidden-view');
  document.getElementById('pack-step-reveal').classList.remove('hidden-view');
  renderStickerStack();
}

function renderStickerStack() {
  const container = document.getElementById('sticker-stack');
  const numEl = document.getElementById('pack-current-num');
  if (numEl) numEl.textContent = (packCurrentIndex + 1) + ' de ' + packFiguritas.length;

  container.innerHTML = packFiguritas.map((id, index) => {
    const s = stickers[id] || { nombre: '' };
    const isRevealed = index < packCurrentIndex;
    const isActive = index === packCurrentIndex;
    const isHidden = index > packCurrentIndex;
    const zIndex = isActive ? 5 : (isRevealed ? packCurrentIndex - index : 0);
    const opacity = isActive ? 1 : 0;
    const scale = isActive ? 1 : (isRevealed ? 0.85 : 0.5);

    const src = stickerImages[id] || '';
    return `
<div class="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500" style="z-index: ${zIndex}; opacity: ${isHidden ? 0 : opacity}; transform: scale(${isHidden ? 0.5 : scale});">
  <img src="${src}" alt="${s.nombre}" class="w-56 h-72 md:w-64 md:h-80 object-contain drop-shadow-2xl ${isActive ? 'sticker-reveal' : ''}">
  <span class="font-label-numeric text-sm text-primary mt-4 ${isActive ? '' : 'hidden'}">${s.nombre}</span>
</div>`;
  }).join('');

  const btn = document.getElementById('btn-siguiente');
  if (packCurrentIndex >= packFiguritas.length - 1) {
    btn.innerHTML = 'VER TODAS <span class="material-symbols-outlined" style="font-size: 20px;">done_all</span>';
  } else {
    btn.innerHTML = 'SIGUIENTE <span class="material-symbols-outlined" style="font-size: 20px;">arrow_forward</span>';
  }
}

function siguienteFigurita() {
  if (packCurrentIndex >= packFiguritas.length - 1) {
    mostrarTodas();
    return;
  }
  packCurrentIndex++;
  renderStickerStack();
}

function mostrarTodas() {
  document.getElementById('pack-step-reveal').classList.add('hidden-view');
  document.getElementById('pack-step-complete').classList.remove('hidden-view');

  const container = document.getElementById('pack-stickers-grid');
  container.innerHTML = packFiguritas.map(id => {
    const s = stickers[id] || { nombre: '' };
    return `
<div class="flex flex-col items-center gap-1 sticker-reveal flex-shrink min-w-0">
  <img src="${stickerImages[id] || ''}" alt="${s.nombre}" class="w-32 h-44 md:w-52 md:h-60 object-contain drop-shadow-xl">
  <span class="font-label-numeric text-[14px] text-primary truncate max-w-full">${s.nombre}</span>
  <button class="share-btn flex items-center gap-1 text-on-surface-variant hover:text-primary transition-all mt-0.5" onclick='abrirCompartir("${id}")' type="button">
    <span class="material-symbols-outlined text-[16px]">share</span>
    <span class="font-label-numeric text-[9px] tracking-wider">COMPARTIR</span>
  </button>
</div>`;
  }).join('');
}

let compartirActualId = null;

function abrirCompartir(id) {
  compartirActualId = id;
  const s = stickers[id] || { nombre: '' };
  const imgEl = document.getElementById('compartir-img');
  const nameEl = document.getElementById('compartir-nombre');
  if (imgEl) { imgEl.src = stickerImages[id] || ''; imgEl.alt = s.nombre; }
  if (nameEl) nameEl.textContent = s.nombre;
  document.getElementById('compartir-modal').classList.remove('hidden-view');
}

function cerrarCompartir() {
  document.getElementById('compartir-modal').classList.add('hidden-view');
  compartirActualId = null;
}

function getMensajeCompartir() {
  const s = stickers[compartirActualId] || { nombre: '' };
  return `¡Mirá! Conseguí la figurita ${s.nombre} en el Álbum CSYDP\nhttps://www.clubsocialydeportivopila.com.ar/`;
}

async function compartirCopiar() {
  try {
    await navigator.clipboard.writeText(getMensajeCompartir());
    mostrarToast('✅ Link copiado');
  } catch {
    mostrarToast('❌ No se pudo copiar');
  }
}

function compartirWhatsApp() {
  window.open(`https://wa.me/?text=${encodeURIComponent(getMensajeCompartir())}`, '_blank');
}

async function compartirWeb() {
  const s = stickers[compartirActualId] || { nombre: '' };
  if (navigator.share) {
    try {
      await navigator.share({
        title: `Álbum CSYDP - ${s.nombre}`,
        text: getMensajeCompartir()
      });
    } catch {}
  } else {
    await compartirCopiar();
  }
}

let toastTimeout = null;

function mostrarToast(texto) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  if (toastTimeout) clearTimeout(toastTimeout);
  toast.textContent = texto;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 2500);
}

function cerrarModalCompleto() {
  document.getElementById('pack-modal').classList.add('hidden-view');
}

// ===================== PILÓN =====================

function togglePilon() {
  const overlay = document.getElementById('pilon-overlay');
  const panel = document.getElementById('pilon-panel');

  if (overlay.classList.contains('hidden-view')) {
    overlay.classList.remove('hidden-view');
    panel.classList.add('open');
    renderPilon();
    updatePilonCounter();
  } else {
    panel.classList.remove('open');
    setTimeout(() => {
      overlay.classList.add('hidden-view');
    }, 250);
  }
}

function renderPilon() {
  const grid = document.getElementById('pilon-grid');
  const empty = document.getElementById('pilon-empty');

  if (misFiguritasSueltas.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden-view');
    return;
  }
  empty.classList.add('hidden-view');

  grid.innerHTML = misFiguritasSueltas.map(id => {
    const s = stickers[id] || { nombre: '' };
    return `
<div class="flex flex-col items-center gap-0.5 cursor-pointer hover:bg-white/5 rounded-lg p-1 transition-all group" onclick="irAPegar('${id}')">
  <img src="${stickerImages[id] || ''}" alt="${s.nombre}" class="w-full aspect-[3/4] object-contain drop-shadow-lg">
  <span class="font-label-numeric text-[7px] text-primary text-center truncate w-full">${s.nombre}</span>
</div>`;
  }).join('');
}

function updatePilonCounter() {
  const count = misFiguritasSueltas.length;
  document.querySelectorAll('.pilon-badge').forEach(badge => {
    if (count > 0) {
      badge.textContent = count > 99 ? '99+' : count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
  const panel = document.getElementById('pilon-panel');
  if (panel && panel.classList.contains('open')) {
    renderPilon();
  }
}

function irAPegar(stickerId) {
  togglePilon();

  const pageId = findPageForSticker(stickerId);
  const currentMain = document.getElementById(currentView);
  const isAlbumPage = currentMain && currentMain.id.startsWith('album-page');

  if (isAlbumPage) {
    const currentPageId = parseInt(currentMain.id.replace('album-page-', ''));
    if (currentPageId !== pageId) {
      toggleAlbum(pageId);
    }
  } else {
    toggleAlbum(pageId);
  }
}

function findPageForSticker(stickerId) {
  for (const page of albumPages) {
    if (page.specialStickerId === stickerId || page.stickerIds.includes(stickerId)) {
      return page.id;
    }
  }
  return 1;
}

function reRenderAlbum() {
  albumPages.forEach(page => {
    const el = document.getElementById(`album-page-${page.id}`);
    if (!el) return;
    el.querySelectorAll('.sticker-slot').forEach(slot => {
      const id = slot.dataset.stickerId;
      if (!id) return;
      const state = getStickerState(id);
      slot.dataset.state = state;
      if (state === 'imagen') {
        const img = slot.querySelector('.state-imagen img');
        if (img) img.src = stickerImages[id] || '';
      }
    });
  });
}

async function checkDailyPack() {
  const btn = document.getElementById('btn-sobre-diario');
  const sub = document.getElementById('subtitulo-sobre-diario');
  if (calcularProgreso() === 100) {
    if (btn) { btn.disabled = true; btn.classList.add('opacity-50', 'cursor-not-allowed'); }
    if (sub) sub.textContent = '¡Completaste el álbum! No podés abrir más sobres';
    return;
  }
  if (profileData?.es_admin === true) {
    if (btn) { btn.disabled = false; btn.classList.remove('opacity-50', 'cursor-not-allowed'); }
    if (sub) sub.textContent = '¡Tenés un sobre disponible hoy!';
    return;
  }
  const yaAbrio = await DataService.yaAbrioHoy();
  if (yaAbrio) {
    if (btn) { btn.disabled = true; btn.classList.add('opacity-50', 'cursor-not-allowed'); }
    if (sub) sub.textContent = 'Ya abriste tu sobre hoy. Volvé mañana';
  } else {
    if (btn) { btn.disabled = false; btn.classList.remove('opacity-50', 'cursor-not-allowed'); }
    if (sub) sub.textContent = '¡Tenés un sobre disponible hoy!';
  }
}

const DEFAULT_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23282a2b'/%3E%3Ccircle cx='50' cy='38' r='18' fill='%23c7c6cc'/%3E%3Cpath d='M18 82 Q18 58 50 58 Q82 58 82 82' fill='%23c7c6cc'/%3E%3C/svg%3E";

let profileData = null;

async function loadProfile() {
  if (!profileData) {
    const { data: { user } } = await supabaseClient.auth.getUser().catch(() => ({ data: { user: null } }));
    profileData = {
      username: user?.email?.split('@')[0] || '',
      email: user?.email || '',
      avatarUrl: DEFAULT_AVATAR,
      memberSince: todayLocal(),
      es_admin: false
    };
    await DataService.saveProfile(profileData);
  }
  const usernameEl = document.getElementById('profile-username');
  const avatarEl = document.getElementById('profile-avatar');
  if (usernameEl) usernameEl.textContent = profileData.username;
  if (avatarEl) avatarEl.src = profileData.avatarUrl || DEFAULT_AVATAR;
}

function toggleProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (!modal) return;
  const isHidden = modal.classList.contains('hidden-view');
  if (isHidden) {
    renderProfileModal();
    modal.classList.remove('hidden-view');
  } else {
    modal.classList.add('hidden-view');
  }
}

function renderProfileModal() {
  if (!profileData) return;
  const avatarEl = document.getElementById('profile-modal-avatar');
  const usernameEl = document.getElementById('profile-modal-username');
  const emailEl = document.getElementById('profile-modal-email');
  const memberEl = document.getElementById('profile-modal-member-since');
  if (avatarEl) avatarEl.src = profileData.avatarUrl || DEFAULT_AVATAR;
  if (usernameEl) usernameEl.textContent = profileData.username;
  if (emailEl) emailEl.textContent = profileData.email;
  if (memberEl) memberEl.textContent = profileData.memberSince;
}

async function uploadAvatar(file) {
  const reader = new FileReader();
  reader.onload = async (e) => {
    const img = new Image();
    img.onload = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = 120;
      canvas.height = 120;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 120, 120);
      const dataUri = canvas.toDataURL('image/webp', 0.7);
      profileData.avatarUrl = dataUri;
      await DataService.saveProfile(profileData);
      document.getElementById('profile-modal-avatar').src = dataUri;
      document.getElementById('profile-avatar').src = dataUri;
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ===================== STATS =====================

function toggleStatsModal() {
  const modal = document.getElementById('stats-modal');
  if (!modal) return;
  const isHidden = modal.classList.contains('hidden-view');
  if (isHidden) {
    renderStats();
    modal.classList.remove('hidden-view');
  } else {
    modal.classList.add('hidden-view');
  }
}

function calcularPaginasCompletadas() {
  let completadas = 0;
  for (const page of albumPages) {
    const allIds = [...page.stickerIds];
    if (page.specialStickerId) allIds.push(page.specialStickerId);
    const todasPegadas = allIds.every(id => misFiguritasPegadas.includes(id));
    if (todasPegadas) completadas++;
  }
  return completadas;
}

function renderStatsPorCategoria() {
  const categorias = {};
  for (const [id, s] of Object.entries(stickers)) {
    const cat = s.categoria;
    if (!categorias[cat]) categorias[cat] = { total: 0, pegadas: 0 };
    categorias[cat].total++;
    if (misFiguritasPegadas.includes(id)) categorias[cat].pegadas++;
  }
  const iconos = { campeones: 'emoji_events', actuales: 'star', promesas: 'auto_awesome', historicas: 'history' };
  const labels = { campeones: 'Campeones', actuales: 'Actuales', promesas: 'Promesas', historicas: 'Historicas' };
  return Object.entries(categorias).map(([cat, data]) => `
    <div class="flex items-center gap-3 text-sm">
      <span class="material-symbols-outlined text-tertiary">${iconos[cat] || 'circle'}</span>
      <span class="text-on-surface-variant">${labels[cat] || cat}</span>
      <span class="text-primary font-label-numeric ml-auto">${data.pegadas} / ${data.total}</span>
    </div>
  `).join('');
}

function renderStats() {
  const container = document.getElementById('stats-content');
  if (!container) return;
  const total = Object.keys(stickers).length;
  const pegadas = misFiguritasPegadas.length;
  const sueltas = misFiguritasSueltas.length;
  const paginas = albumPages.length;
  const paginasCompletadas = calcularPaginasCompletadas();

  container.innerHTML = `
<div class="flex items-center gap-3 text-sm">
  <span class="material-symbols-outlined text-tertiary">checklist</span>
  <span class="text-on-surface-variant">Pegadas:</span>
  <span class="text-primary font-label-numeric ml-auto">${pegadas} / ${total}</span>
</div>
<div class="flex items-center gap-3 text-sm">
  <span class="material-symbols-outlined text-tertiary">inventory_2</span>
  <span class="text-on-surface-variant">Sueltas:</span>
  <span class="text-primary font-label-numeric ml-auto">${sueltas}</span>
</div>
<div class="flex items-center gap-3 text-sm">
  <span class="material-symbols-outlined text-tertiary">auto_stories</span>
  <span class="text-on-surface-variant">Páginas completadas:</span>
  <span class="text-primary font-label-numeric ml-auto">${paginasCompletadas} / ${paginas}</span>
</div>
<div class="border-t border-white/10 pt-4">
  <p class="text-on-surface-variant text-xs mb-3 font-label-numeric tracking-wider">POR RAREZA</p>
  <div class="space-y-3">
    ${renderStatsPorCategoria()}
  </div>
</div>`;
}

// ===================== STICKER PASTE =====================

async function pasteSticker(btnElement) {
  if (isPasting) return;
  isPasting = true;

  try {
    const slot = btnElement.closest('.sticker-slot');
    const id = slot.dataset.stickerId;

    if (!misFiguritasSueltas.includes(id)) return;

    slot.dataset.state = 'pegando';

    const success = await DataService.pegarFigurita(id);
    if (!success) {
      slot.dataset.state = 'pegar';
      return;
    }

    const idx = misFiguritasSueltas.indexOf(id);
    if (idx !== -1) {
      misFiguritasSueltas.splice(idx, 1);
      if (!misFiguritasPegadas.includes(id)) {
        misFiguritasPegadas.push(id);
      }
    }

    const img = slot.querySelector('.state-imagen img');
    if (img) img.src = stickerImages[id] || '';
    slot.dataset.state = 'imagen';

    setTimeout(() => {
      const stateImg = slot.querySelector('.state-imagen');
      if (stateImg) {
        stateImg.style.boxShadow = "0 0 20px rgba(233, 196, 0, 0.4)";
      }
    }, 800);

    updateProgressBar();
    updatePilonCounter();

    if (calcularProgreso() === 100) {
      const modal = document.getElementById('completion-modal');
      if (modal) modal.classList.remove('hidden-view');
    }
  } finally {
    isPasting = false;
  }
}

function cerrarCompletado() {
  const modal = document.getElementById('completion-modal');
  if (modal) modal.classList.add('hidden-view');
}

const MENSAJE_COMPLETADO = '¡Completé el álbum del Club Social y Deportivo Pila!\nhttps://www.clubsocialydeportivopila.com.ar/';

async function completadoCopiar() {
  try {
    await navigator.clipboard.writeText(MENSAJE_COMPLETADO);
    mostrarToast('✅ Link copiado');
  } catch {
    mostrarToast('❌ No se pudo copiar');
  }
}

function completadoWhatsApp() {
  window.open(`https://wa.me/?text=${encodeURIComponent(MENSAJE_COMPLETADO)}`, '_blank');
}

async function completadoWeb() {
  if (navigator.share) {
    try {
      await navigator.share({ title: 'Álbum CSYDP', text: MENSAJE_COMPLETADO });
    } catch {}
  } else {
    await completadoCopiar();
  }
}

function abrirStickerModal(id) {
  const img = document.getElementById('sticker-modal-img');
  const s = stickers[id] || { nombre: '' };
  if (img) { img.src = stickerImages[id] || ''; img.alt = s.nombre; }
  document.getElementById('sticker-modal').classList.remove('hidden-view');
}

function cerrarStickerModal() {
  document.getElementById('sticker-modal').classList.add('hidden-view');
}

async function logout() {
  profileData = null;
  misFiguritasPegadas = [];
  misFiguritasSueltas = [];
  try {
    await supabaseClient.auth.signOut();
  } finally {
    localStorage.clear();
    window.location.replace('/login.html?logout=1');
  }
}

// ===================== INIT =====================

document.addEventListener('DOMContentLoaded', async () => {
  const { data: { user } } = await supabaseClient.auth.getUser().catch(() => ({ data: { user: null } }));
  if (!user) { window.location.replace('/login.html'); return; }
  await initState();

  profileData = await DataService.getProfile();
  await loadProfile();

  Object.values(emptyImages).forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });

  albumPages.forEach(page => {
    const el = document.getElementById(`album-page-${page.id}`);
    if (el) {
      el.innerHTML = renderAlbumPage(page);
    }
  });

  document.getElementById('main-view').classList.remove('hidden-view');
  currentView = 'main-view';

  updatePilonCounter();
  updateProgressBar();
  await checkDailyPack();
  document.getElementById('avatar-upload-input').addEventListener('change', async (e) => {
    if (e.target.files?.[0]) { await uploadAvatar(e.target.files[0]); e.target.value = ''; }
  });

  const ls = document.getElementById('loading-screen');
  if (ls) ls.classList.add('hidden');

  checkOrientation();
  let orientTimer;
  window.addEventListener('resize', () => {
    clearTimeout(orientTimer);
    orientTimer = setTimeout(checkOrientation, 150);
  });
  window.addEventListener('orientationchange', () => {
    clearTimeout(orientTimer);
    orientTimer = setTimeout(checkOrientation, 300);
  });
});

function checkOrientation() {
  const overlay = document.getElementById('rotate-overlay');
  if (!overlay) return;
  const isMobile = window.innerWidth < 768;
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  overlay.classList.toggle('hidden', !(isMobile && isPortrait));
}
