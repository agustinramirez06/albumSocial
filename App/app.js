// ===================== DATA LAYER =====================

const stickers = {
  '0':  { nombre: 'Copa Clausura 2017',  categoria: 'especial', img: '../campeones2017/0.png',  empty: '../figuritasVacias/0.png' },
  '1':  { nombre: 'Mandrake Pereyra',  categoria: 'comun', img: '../campeones2017/1.png',  empty: '../figuritasVacias/1.png' },
  '2':  { nombre: 'Toto Gonzalez',  categoria: 'comun', img: '../campeones2017/2.png',  empty: '../figuritasVacias/2.png' },
  '3':  { nombre: 'Renzo Menconi',  categoria: 'comun', img: '../campeones2017/3.png',  empty: '../figuritasVacias/3.png' },
  '4':  { nombre: 'Alan Vargas',  categoria: 'comun', img: '../campeones2017/4.png',  empty: '../figuritasVacias/4.png' },
  '5':  { nombre: 'Ramiro Ceberio',  categoria: 'comun', img: '../campeones2017/5.png',  empty: '../figuritasVacias/5.png' },
  '6':  { nombre: 'Kelo Gutierrez',  categoria: 'comun', img: '../campeones2017/6.png',  empty: '../figuritasVacias/6.png' },
  '7':  { nombre: 'Mauro Orlando',  categoria: 'comun', img: '../campeones2017/7.png',  empty: '../figuritasVacias/7.png' },
  '8':  { nombre: 'Juan Varela',  categoria: 'comun', img: '../campeones2017/8.png',  empty: '../figuritasVacias/8.png' },
  '9':  { nombre: 'Cristian Durante',  categoria: 'comun', img: '../campeones2017/9.png',  empty: '../figuritasVacias/9.png' },
  '10': { nombre: 'Santiago De Leon', categoria: 'comun', img: '../campeones2017/10.png', empty: '../figuritasVacias/10.png' },
  '11': { nombre: 'Joe Niella', categoria: 'comun', img: '../campeones2017/11.png', empty: '../figuritasVacias/11.png' },
  '12': { nombre: 'Kika Pereyra', categoria: 'comun', img: '../campeones2017/12.png', empty: '../figuritasVacias/12.png' },
  '13': { nombre: 'Mono Martinez', categoria: 'comun', img: '../campeones2017/13.png', empty: '../figuritasVacias/13.png' },
  '14': { nombre: 'Maximiliano Vallejo', categoria: 'comun', img: '../campeones2017/14.png', empty: '../figuritasVacias/14.png' },
  '15': { nombre: 'Nicolas Castaño', categoria: 'comun', img: '../campeones2017/15.png', empty: '../figuritasVacias/15.png' },
  '16': { nombre: 'Braian Acuña', categoria: 'comun', img: '../campeones2017/16.png', empty: '../figuritasVacias/16.png' },
  '17': { nombre: 'Juan Cruz Arias', categoria: 'comun', img: '../campeones2017/17.png', empty: '../figuritasVacias/17.png' },
  '18': { nombre: 'Nicolas Mandau', categoria: 'comun', img: '../campeones2017/18.png', empty: '../figuritasVacias/18.png' },
  'special-2': { nombre: 'Cuerpo Tecnico', categoria: 'especial', img: '../campeones2017/19.png', empty: '../figuritasVacias/19.png' }
};

const stickerImages = {};
const emptyImages = {};
for (const [id, s] of Object.entries(stickers)) {
  stickerImages[id] = s.img;
  emptyImages[id] = s.empty;
}

const albumPages = [
  {
    id: 1,
    title: 'Campeones Torneo clausura 2017',
    gridCols: 5,
    stickerIds: ['1','2','3','4','5','6','7','8','9','10'],
    specialStickerId: '0',
    watermarkSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUb0gIUWWKRZ_P8gq1cuBUpRZVyCHtVYw6XbglfJrvmVq4EmasaYhVwIOw3JpiEQf7n4kq7hwfgb9yq7XayYOMv9pYhvjzVCG9nugppzJI9Sr3OghKT9L5dMB9RsojSr0xbUoinznCQurikZKWXmdvXmQo7Tg40LlnmZ2rI7JXGXZUvjYn91R3jRL4KcEEixzVvhhBU69EqIMaP-xODb6lwYrPkpv7LhbqfuBRvmzVHsT0eViQzwkb4vlmhqBfLScGA1cbGkX3D4l7',
    sidebar: { type: 'match', title: 'Final Ida 18/12/2017 CSYDP vs UNION Vecinal De Etcheverry', score: 'CSYDP 3-2 Union Vecinal De Etcheverry', goals: ['K.Gutierrez','K.Gutierrez','M.Orlando'] },
    photo: { src: '../campeones2017/final-ida.jpg', label: 'FINAL IDA 2017' },
    pageLabel: 'HOJA 1'
  },
  {
    id: 2,
    title: 'Campeones Torneo clausura 2017',
    gridCols: 5,
    stickerIds: ['11','12','13','14','16','17','18','15'],
    specialStickerId: 'special-2',
    watermarkSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASCyPMrX1cHc_oTSaExBwNKqw0eUuIzg7W4j6trAzS9blJFPQU2MA9l7WC6CHC75mk4cADJWwI0PYSGbrgP3ReWJP65U0w-kg5SoeymXEzGfq0OQJGXeqGezkC1fZz2oVOu7qK03qGnO7sXOqa6XF8OUWHxlkAlKUZfrBVjBUiKEUxs_Io8VE8gxSzcMyxLAlCSBgwITzWFDByo8r7kDkXjfEUU6xF0tLKkfRX3HUSGmnivd_kjBWQ5NCWde0ILdMGJWKtkE_a6kQR',
    sidebar: { type: 'match', title: 'Final Vuelta 23/12/2017 CSYDP vs UNION Vecinal De Etcheverry', score: 'CSYDP 2-2 Union Vecinal De Etcheverry', goals: ['M.Orlando','M.Orlando'] },
    photo: { src: '../campeones2017/final-vuelta.jpg', label: 'FINAL VUELTA 2017' },
    pageLabel: 'HOJA 2'
  }
];

// ===================== SAFE STORAGE HELPERS =====================

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

  async getMisFiguritas() {
    const pegadas = safeGetJSON(this.STORAGE_PEGADAS, []);
    const sueltas = safeGetJSON(this.STORAGE_SUELTAS, []);
    return { pegadas, sueltas };
  },

  async pegarFigurita(figuritaId) {
    let sueltas = safeGetJSON(this.STORAGE_SUELTAS, []);
    let pegadas = safeGetJSON(this.STORAGE_PEGADAS, []);
    const idx = sueltas.indexOf(figuritaId);
    if (idx === -1) return false;
    sueltas.splice(idx, 1);
    if (!pegadas.includes(figuritaId)) {
      pegadas.push(figuritaId);
    }
    const saved = safeSetJSON(this.STORAGE_SUELTAS, sueltas);
    if (!saved) return false;
    safeSetJSON(this.STORAGE_PEGADAS, pegadas);
    return true;
  },

  async abrirSobre() {
    const allIds = Object.keys(stickers);
    const shuffled = [...allIds].sort(() => Math.random() - 0.5);
    const nuevas = shuffled.slice(0, 5);
    let sueltas = safeGetJSON(this.STORAGE_SUELTAS, []);
    for (const id of nuevas) {
      if (!sueltas.includes(id)) {
        sueltas.push(id);
      }
    }
    safeSetJSON(this.STORAGE_SUELTAS, sueltas);
    const today = new Date().toISOString().split('T')[0];
    safeSetJSON(this.STORAGE_ULTIMO_SOBRE, today);
    return nuevas;
  },

  STORAGE_PROFILE: 'csydp_profile',

  async getProfile() {
    return safeGetJSON(this.STORAGE_PROFILE, null);
  },

  async saveProfile(profile) {
    return safeSetJSON(this.STORAGE_PROFILE, profile);
  },

  async yaAbrioHoy() {
    try {
      const ultimo = localStorage.getItem(this.STORAGE_ULTIMO_SOBRE);
      const today = new Date().toISOString().split('T')[0];
      return ultimo === today;
    } catch {
      return false;
    }
  }
};

// ===================== STATE =====================

let misFiguritasPegadas = [];
let misFiguritasSueltas = [];
let isOpening = false;

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

function renderStickerSlot(id) {
  const s = stickers[id] || { img: '', empty: '' };
  const state = getStickerState(id);
  const imgSrc = stickerImages[id] || '';
  return `
<div class="sticker-slot relative flex flex-col items-center justify-center" data-sticker-id="${id}" data-state="${state}">
  <div class="state-vacio absolute inset-0 flex items-center justify-center">
    <img src="${s.empty}" alt="Vacio" class="w-full h-full object-contain opacity-50 p-1" loading="lazy">
  </div>
  <div class="state-pegar absolute inset-0 cursor-pointer" onclick="pasteSticker(this)">
    <img src="${s.empty}" alt="Vacio" class="w-full h-full object-contain opacity-30 p-1">
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="pegar-badge">PEGAR</span>
    </div>
  </div>
  <div class="state-imagen absolute inset-0">
    <img src="${imgSrc}" alt="Sticker" class="w-full h-full object-contain p-1" loading="lazy">
  </div>
  <div class="state-pegando absolute inset-0 flex items-center justify-center">
    <span class="material-symbols-outlined spin text-secondary-container" style="font-size: 48px;">progress_activity</span>
  </div>
</div>`;
}

function renderSidebar(sidebar) {
  if (sidebar.type === 'match') {
    return `
<div class="glass-panel p-4 rounded-lg border-l-4 border-secondary-container">
  <h4 class="font-label-numeric text-[11px] text-white font-bold leading-tight mb-2">${sidebar.title}</h4>
  <p class="text-primary text-[10px] font-bold mb-1">${sidebar.score}</p>
  <ul class="text-[10px] space-y-1">
    ${sidebar.goals.map(g => `
    <li class="flex items-center gap-2 text-secondary">${g} <span class="material-symbols-outlined text-[10px]" style="font-variation-settings: &quot;FILL&quot; 1;">sports_soccer</span></li>
    `).join('')}
  </ul>
</div>`;
  }
  return `
<div class="glass-panel p-4 rounded-lg border-l-4 border-secondary-container">
  <h4 class="font-label-numeric text-[11px] text-white font-bold leading-tight mb-2">${sidebar.title}</h4>
  <p class="text-primary text-[10px] font-bold mb-1">${sidebar.subtitle}</p>
  <p class="text-[10px] text-on-surface-variant leading-relaxed">${sidebar.description}</p>
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

function renderNavButtons(pageId) {
  const idx = albumPages.findIndex(p => p.id === pageId);
  const prevPage = idx > 0 ? albumPages[idx - 1].id : 0;
  const nextPage = idx < albumPages.length - 1 ? albumPages[idx + 1].id : null;
  return `
<div class="relative z-10 mt-16 flex justify-center items-center gap-12">
  <button class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all group" onclick="toggleAlbum(${prevPage}, 'prev')" type="button">
    <span class="material-symbols-outlined text-4xl group-hover:-translate-x-1 transition-transform">undo</span>
    <span class="font-display-lg-mobile text-xl uppercase italic font-bold">Anterior</span>
  </button>
  ${nextPage !== null
    ? `<button class="flex items-center gap-3 text-secondary-container hover:brightness-110 transition-all group" onclick="toggleAlbum(${nextPage}, 'next')" type="button">
    <span class="font-display-lg-mobile text-xl uppercase italic font-bold">Siguiente</span>
    <span class="material-symbols-outlined text-4xl group-hover:translate-x-1 transition-transform">redo</span>
  </button>`
    : `<button class="flex items-center gap-3 text-on-surface-variant/30 cursor-not-allowed transition-all group" type="button">
    <span class="font-display-lg-mobile text-xl uppercase italic font-bold">Siguiente</span>
    <span class="material-symbols-outlined text-4xl group-hover:translate-x-1 transition-transform">redo</span>
  </button>`
  }
</div>
<div class="mt-8 text-center text-[10px] font-label-numeric text-white/20 uppercase tracking-widest">
  ${albumPages.find(p => p.id === pageId)?.pageLabel || ''}
</div>`;
}

function renderAlbumPage(page) {
  return `
<div class="max-w-[1500px] mx-auto album-page-container rounded-xl shadow-2xl p-4 md:p-6 min-h-[700px]">
  <img alt="Background Shield" class="watermark-shield" src="${page.watermarkSrc}">
  <div class="crease hidden md:block"></div>
  <header class="relative z-10 text-center mb-12">
    <h2 class="font-display-lg text-display-lg text-primary uppercase tracking-tight border-b-2 border-secondary-container inline-block pb-2">
      ${page.title}
    </h2>
  </header>
  <div class="relative z-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
    <div class="w-full lg:w-48 flex-shrink-0 flex justify-center">
      <div class="w-48">
        ${page.specialStickerId ? renderStickerSlot(page.specialStickerId) : ''}
      </div>
    </div>
    <div class="flex-grow">
      <div class="album-grid" style="--grid-cols: ${page.gridCols}">
        ${page.stickerIds.map(id => renderStickerSlot(id)).join('')}
      </div>
    </div>
    <div class="w-full lg:w-80 flex-shrink-0 space-y-4">
      ${page.sidebar ? renderSidebar(page.sidebar) : ''}
      ${page.photo ? renderPhoto(page.photo) : ''}
    </div>
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
    const isPrev = direction === 'prev';

    document.querySelectorAll('.slide-stage, .slide-out-left, .slide-out-right, .slide-in-left, .slide-in-right')
      .forEach(el => el.classList.remove('slide-stage', 'slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right'));

    const currentContainer = currentEl.querySelector('.album-page-container');
    const targetContainer = target.querySelector('.album-page-container');
    if (!currentContainer || !targetContainer) return;

    currentEl.classList.add('slide-stage');
    target.classList.remove('hidden-view');
    target.classList.add('slide-stage');

    targetContainer.classList.add(isPrev ? 'slide-in-left' : 'slide-in-right');

    void targetContainer.offsetHeight;

    currentContainer.classList.add(isPrev ? 'slide-out-right' : 'slide-out-left');
    targetContainer.classList.remove(isPrev ? 'slide-in-left' : 'slide-in-right');

    setTimeout(() => {
      currentEl.classList.add('hidden-view');
      currentEl.classList.remove('slide-stage');
      currentContainer.classList.remove('slide-out-left', 'slide-out-right');
      target.classList.remove('slide-stage');
      currentView = target.id;
    }, 900);
  } else {
    const views = [document.getElementById('main-view')];
    albumPages.forEach(p => views.push(document.getElementById(`album-page-${p.id}`)));

    views.forEach(v => {
      if (v && v !== target) {
        v.classList.add('hidden-view');
      }
    });

    target.classList.remove('hidden');

    setTimeout(() => {
      if (target) {
        target.classList.remove('hidden-view');
        currentView = target.id;
      }
    }, 40);
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
  isOpening = true;

  const btn = document.getElementById('btn-sobre-diario');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="material-symbols-outlined spin">progress_activity</span> ABRIENDO...';
  }

  const nuevas = await DataService.abrirSobre();
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
  if (numEl) numEl.textContent = packCurrentIndex + 1;

  container.innerHTML = packFiguritas.map((id, index) => {
    const s = stickers[id] || { img: '', nombre: '' };
    const isRevealed = index < packCurrentIndex;
    const isActive = index === packCurrentIndex;
    const isHidden = index > packCurrentIndex;
    const zIndex = isActive ? 5 : (isRevealed ? packCurrentIndex - index : 0);
    const opacity = isActive ? 1 : (isRevealed ? 0.25 : 0);
    const scale = isActive ? 1 : (isRevealed ? 0.85 : 0.5);

    return `
<div class="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500" style="z-index: ${zIndex}; opacity: ${isHidden ? 0 : opacity}; transform: scale(${isHidden ? 0.5 : scale});">
  <img src="${s.img}" alt="${s.nombre}" class="w-56 h-72 md:w-64 md:h-80 object-contain drop-shadow-2xl ${isActive ? 'sticker-reveal' : ''}">
  <span class="font-label-numeric text-sm text-primary mt-4 ${isActive ? '' : 'hidden'}">${s.nombre}</span>
</div>`;
  }).join('');

  const btn = document.getElementById('btn-siguiente');
  if (packCurrentIndex >= MAX_PACK_SIZE - 1) {
    btn.innerHTML = 'VER TODAS <span class="material-symbols-outlined" style="font-size: 20px;">done_all</span>';
  } else {
    btn.innerHTML = 'SIGUIENTE <span class="material-symbols-outlined" style="font-size: 20px;">arrow_forward</span>';
  }
}

function siguienteFigurita() {
  if (packCurrentIndex >= MAX_PACK_SIZE - 1) {
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
    const s = stickers[id] || { img: '', nombre: '' };
    return `
<div class="flex flex-col items-center gap-1 sticker-reveal flex-shrink min-w-0">
  <img src="${s.img}" alt="${s.nombre}" class="w-32 h-44 md:w-52 md:h-60 object-contain drop-shadow-xl">
  <span class="font-label-numeric text-[14px] text-primary truncate max-w-full">${s.nombre}</span>
</div>`;
  }).join('');
}

function cerrarModalCompleto() {
  document.getElementById('pack-modal').classList.add('hidden-view');
}

// ===================== PILÓN =====================

async function togglePilon() {
  const overlay = document.getElementById('pilon-overlay');
  const panel = document.getElementById('pilon-panel');

  if (overlay.classList.contains('hidden-view')) {
    const state = await DataService.getMisFiguritas();
    misFiguritasPegadas = state.pegadas;
    misFiguritasSueltas = state.sueltas;
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
    const s = stickers[id] || { img: '', nombre: '' };
    return `
<div class="flex flex-col items-center gap-0.5 cursor-pointer hover:bg-white/5 rounded-lg p-1 transition-all group" onclick="irAPegar('${id}')">
  <img src="${s.img}" alt="${s.nombre}" class="w-full aspect-[3/4] object-contain drop-shadow-lg">
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
      toggleAlbum(pageId, pageId > currentPageId ? 'next' : 'prev');
    }
  } else {
    toggleAlbum(pageId);
  }

  setTimeout(() => {
    const slot = document.querySelector(`.sticker-slot[data-sticker-id="${stickerId}"]`);
    if (slot) {
      slot.scrollIntoView({ behavior: 'smooth', block: 'center' });
      slot.style.animation = 'highlight-peg 1.5s ease-in-out';
      slot.style.borderRadius = '8px';
      setTimeout(() => { slot.style.animation = ''; }, 1500);
    }
  }, isAlbumPage ? 100 : 900);
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
    if (el) {
      el.innerHTML = renderAlbumPage(page);
    }
  });
}

function checkDailyPack() {
  const btn = document.getElementById('btn-sobre-diario');
  const subtitleEl = document.getElementById('subtitulo-sobre-diario');
  if (btn) { btn.disabled = false; btn.classList.remove('opacity-50', 'cursor-not-allowed'); }
  if (subtitleEl) subtitleEl.textContent = 'Abrí cuantos sobres quieras (modo prueba)';
}

const DEFAULT_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23282a2b'/%3E%3Ccircle cx='50' cy='38' r='18' fill='%23c7c6cc'/%3E%3Cpath d='M18 82 Q18 58 50 58 Q82 58 82 82' fill='%23c7c6cc'/%3E%3C/svg%3E";

let profileData = null;

async function loadProfile() {
  if (!profileData) {
    profileData = {
      username: 'Jugador',
      email: 'tucorreo@ejemplo.com',
      avatarUrl: DEFAULT_AVATAR,
      memberSince: new Date().toISOString().split('T')[0]
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
    <div class="flex items-center gap-3 text-sm">
      <span class="material-symbols-outlined text-tertiary">emoji_events</span>
      <span class="text-on-surface-variant">Campeones</span>
      <span class="text-primary font-label-numeric ml-auto">10 / 18</span>
    </div>
    <div class="flex items-center gap-3 text-sm">
      <span class="material-symbols-outlined text-tertiary">star</span>
      <span class="text-on-surface-variant">Actuales</span>
      <span class="text-primary font-label-numeric ml-auto">2 / 5</span>
    </div>
    <div class="flex items-center gap-3 text-sm">
      <span class="material-symbols-outlined text-tertiary">auto_awesome</span>
      <span class="text-on-surface-variant">Promesas</span>
      <span class="text-primary font-label-numeric ml-auto">0 / 3</span>
    </div>
  </div>
</div>`;
}

// ===================== STICKER PASTE =====================

async function pasteSticker(btnElement) {
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
}

// ===================== INIT =====================

document.addEventListener('DOMContentLoaded', async () => {
  await initState();

  profileData = await DataService.getProfile();
  await loadProfile();

  albumPages.forEach(page => {
    const el = document.getElementById(`album-page-${page.id}`);
    if (el) {
      el.innerHTML = renderAlbumPage(page);
      el.classList.remove('hidden');
    }
  });

  document.getElementById('main-view').classList.remove('hidden-view');
  currentView = 'main-view';

  updatePilonCounter();
  updateProgressBar();
  checkDailyPack();
});
