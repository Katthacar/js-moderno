const search = document.getElementById('submit-buscador');
search.addEventListener('click', (e) => {
  e.preventDefault(); // Previniendo acción por default
  console.log('Searching courses');
});
search.addEventListener('click', actionButton);

function actionButton(e) {
  e.preventDefault();
  console.log(e);
  console.log(e.target);
  let elem = e.target;
  console.log(elem.id);
  console.log(elem.className);
  console.log('Lista de clases', elem.classList);
  console.log(elem.getAttribute('type'));
}

/**
 * EVENTOS DE MOUSE
 */
// Variables
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const botonVaciar = document.querySelector('#vaciar-carrito');
// Click
botonVaciar.addEventListener('click', getEvent);
botonVaciar.addEventListener('dblclick', getEvent);
botonVaciar.addEventListener('mouseenter', getEvent);
botonVaciar.addEventListener('mouseout', getEvent);
botonVaciar.addEventListener('mouseleave', getEvent);
botonVaciar.addEventListener('mouseout', getEvent);
botonVaciar.addEventListener('mouseover', getEvent);
botonVaciar.addEventListener('mousemove', getEvent);
botonVaciar.addEventListener('mouseup', getEvent);
botonVaciar.addEventListener('mousedown', getEvent);

encabezado.addEventListener('mousemove', getEvent);

function getEvent(e) {
  console.log(`EVENTO: ${e.type}`);
}

/**
 * EVENTOS DE INPUTS
 **/
const txtSearch = document.getElementById('buscador');
console.log(txtSearch);
/**
 * keydown, keyup, keypress, focus, blur, cut, copy, paste, input, change
 */
txtSearch.addEventListener('keyup', (e) => {
  const header = document.getElementById('encabezado');
  header.textContent = txtSearch.value;
  console.log('Letra:', e.key);
  console.log('Tipo:', e.type);
  console.log('Valor:', txtSearch.value);
});

txtSearch.addEventListener('copy', alertCutCopyPaste);
txtSearch.addEventListener('cut', alertCutCopyPaste);
txtSearch.addEventListener('paste', alertCutCopyPaste);

function alertCutCopyPaste(e) {
  e.preventDefault();
  if (e.type === 'copy' || e.type === 'cut' || e.type === 'paste')
    alert('Operación inválida')
}
