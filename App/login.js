const SUPABASE_URL = 'https://wumpbrsnzoybwszjsbwv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bXBicnNuem95YndzempzYnd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5ODQ2NDAsImV4cCI6MjA5NTU2MDY0MH0.p9RPH3gmUpjNHvLeZGSkXe5ICsjQI1NzWg-YZpCJE-Y';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let isRegisterMode = false;

const emailInput = document.getElementById('auth-email');
const passwordInput = document.getElementById('auth-password');
const usernameInput = document.getElementById('auth-username');
const errorEl = document.getElementById('auth-error');
const btnSubmit = document.getElementById('btn-submit');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');

function setMode(mode) {
  isRegisterMode = mode === 'register';

  tabLogin.classList.toggle('active', !isRegisterMode);
  tabRegister.classList.toggle('active', isRegisterMode);

  usernameInput.classList.toggle('hidden-input', !isRegisterMode);
  usernameInput.required = isRegisterMode;

  btnSubmit.innerHTML = isRegisterMode
    ? '<span class="material-symbols-outlined">person_add</span> REGISTRARSE'
    : '<span class="material-symbols-outlined">login</span> INICIAR SESIÓN';

  errorEl.textContent = '';
}

function mostrarError(msg) {
  errorEl.textContent = msg;
  errorEl.classList.add('visible');
}

async function handleSubmit() {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  errorEl.textContent = '';
  errorEl.classList.remove('visible');

  if (!email) { mostrarError('Ingresá tu correo electrónico'); return; }
  if (!password || password.length < 6) { mostrarError('La contraseña debe tener al menos 6 caracteres'); return; }

  if (isRegisterMode) {
    const username = usernameInput.value.trim();
    if (!username) { mostrarError('Ingresá un nombre de usuario'); return; }
    await register(email, password, username);
  } else {
    await login(email, password);
  }
}

async function login(email, password) {
  btnSubmit.disabled = true;
  btnSubmit.innerHTML = '<span class="material-symbols-outlined spin">progress_activity</span> INGRESANDO...';

  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

  btnSubmit.disabled = false;

  if (error) {
    if (error.message.includes('Invalid login credentials')) {
      mostrarError('Correo o contraseña incorrectos');
    } else {
      mostrarError(error.message);
    }
    btnSubmit.innerHTML = '<span class="material-symbols-outlined">login</span> INICIAR SESIÓN';
    return;
  }

  localStorage.removeItem('csydp_pegadas');
  localStorage.removeItem('csydp_sueltas');
  localStorage.removeItem('csydp_ultimo_sobre');
  localStorage.removeItem('csydp_profile');
  window.location.replace('index.html');
}

async function register(email, password, username) {
  btnSubmit.disabled = true;
  btnSubmit.innerHTML = '<span class="material-symbols-outlined spin">progress_activity</span> REGISTRANDO...';

  const { data, error } = await supabaseClient.auth.signUp({ email, password });

  if (error) {
    btnSubmit.disabled = false;
    mostrarError(error.message);
    btnSubmit.innerHTML = '<span class="material-symbols-outlined">person_add</span> REGISTRARSE';
    return;
  }

  if (data.user) {
    const { error: profileError } = await supabaseClient
      .rpc('crear_perfil', { p_username: username });

    if (profileError) {
      btnSubmit.disabled = false;
      mostrarError('Error al crear perfil: ' + profileError.message);
      btnSubmit.innerHTML = '<span class="material-symbols-outlined">person_add</span> REGISTRARSE';
      return;
    }
  }

  btnSubmit.disabled = false;

  if (data.session) {
    localStorage.removeItem('csydp_pegadas');
    localStorage.removeItem('csydp_sueltas');
    localStorage.removeItem('csydp_ultimo_sobre');
    localStorage.removeItem('csydp_profile');
    window.location.replace('index.html');
  } else {
    mostrarError('Registro exitoso. Revisá tu correo para confirmar la cuenta.');
    btnSubmit.innerHTML = '<span class="material-symbols-outlined">person_add</span> REGISTRARSE';
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('logout')) {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
      window.location.replace('index.html');
    }
  }
});
