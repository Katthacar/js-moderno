/**
 * EVENT BUBBLING
 **/
const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const addCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('click en card');
});
infoCurso.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('click en infocurso');
});
addCarrito.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('click en addcarrito');
});

/**
 * DELEGATION
 **/
document.body.addEventListener('click', deleteElement);

function deleteElement(e) {
  e.preventDefault();
  // console.log(e.target);
  // console.log(e.target.classList);
  const el = e.target;
  if (el.classList.contains('borrar-curso')) {
    el.parentElement.parentElement.remove();
  }
  if (el.classList.contains('agregar-carrito')) {
    console.log('curso agregado');
  }
}
