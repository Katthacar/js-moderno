function Seguro(marca, anio, tipo) {
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo;
}

// Interfaz
function Interfaz() {
}

Interfaz.prototype.showMsg = function (msg, tipo) {
  const div = document.createElement('div');
  if (tipo === 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('success');
  }
  div.innerHTML = `${msg}`;
  form.insertBefore(div, document.querySelector('.form-group'));
  setTimeout(() => {
    div.remove();
  }, 3000);
};

// Event-listeners
const form = document.getElementById('cotizar-seguro');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Leyendo marca seleccionada
  const marca = document.getElementById('marca');
  const selectedMarca = marca.options[marca.selectedIndex].value;
  // Leyendo año seleccionado
  const anio = document.getElementById('anio');
  const selectedAnio = anio.options[anio.selectedIndex].value;
  // Leyendo valor de radioButton
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  // Crear instancia de Interfaz
  const interfaz = new Interfaz();
  if (selectedMarca === '' || selectedAnio === '' || tipo === '') {
    interfaz.showMsg('Faltan datos, Revisar formulario!', 'error');
  } else {
    interfaz.showMsg('Datos correctos!', 'success');
  }
  console.log(tipo);
});

const max = new Date().getFullYear(), min = max - 20;
const selectAnio = document.getElementById('anio');
for (let i = max; i >= min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  selectAnio.appendChild(option);
}
