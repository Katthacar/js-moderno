/**
 * VARIABLES
 **/
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnSend = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');
const form = document.getElementById('enviar-mail');

/**
 * EVENT-LISTENERS
 **/
function eventListeners() {
  // Inicio de la aplicación
  document.addEventListener('DOMContentLoaded', startApp);
}

/**
 * FUNCTIONS
 **/
function startApp() {
  // Disable send
  btnSend.disabled = true;
  // Campos del form
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);
  form.addEventListener('submit', sendEmail);
  btnReset.addEventListener('click', () => form.reset());
}

// Validando escritura en el campo
function validarCampo() {
  // Validando long del texto y que no este vacío
  validarLongitud(this); // this es el campo que envía el evento
  // Habilitando o deshabilitando btnSend por cada validación de inputs
  btnSend.disabled = !isValidEmail(email) || asunto.value === '' || mensaje.value === '';
}

// Valuda longitud del campo
function validarLongitud(campo) {
  if (campo.value !== '') {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}

function isValidEmail(email) {
  const re = new RegExp('^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$');
  if (!re.test(email.value)) {
    email.style.borderBottomColor = 'red';
    email.classList.add('error');
    return false;
  }
  return true;
}

function sendEmail(e) {
  e.preventDefault();
  const spinner = document.getElementById('spinner');
  const enviado = document.createElement('img');
  enviado.id = 'enviado';
  enviado.setAttribute('src', 'img/mail.gif');
  enviado.width = '180';
  spinner.style.display = 'block';
  setTimeout(() => {
    spinner.style.display = 'none';
    form.reset();
    document.getElementById('loaders').appendChild(enviado);
    setTimeout(() => {
      enviado.remove();
    }, 3000);
  }, 3000);
  console.log('Enviando email');
}

/**
 * STARTING
 **/
eventListeners();
