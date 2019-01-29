const navegacion = document.querySelector('#principal');
console.log(navegacion.childNodes); // Obtiene los nodos hijos incluyendo saltos de línea
console.log(navegacion.children); // Obtiene los nodos hijos sin incluir saltos de línea
console.log(navegacion.children[0].nodeName); // Obtiene el nombre de un elemento
console.log(navegacion.children[0].nodeType); // Obtiene el tipo del nodo
navegacion.children[3].textContent = 'Nuevo texto link';
/**
 * Tipos de nodo
 * 1 = Elementos
 * 2 = Attr
 * 3 = Text Node
 * 8 = Comentarios
 * 9 = Documentos
 * 10 = Doctype
 */

const barra = document.querySelector('.barra');
console.log(barra.children[0].children[0].children);

const cursos = document.querySelectorAll('.card');
console.log(cursos);
console.log(cursos[0].lastChild); // Útimo elemento incluyendo espacio
console.log(cursos[0].lastElementChild); // Último elemento sin incluir espacio
console.log(cursos[0].firstChild); // Primer elemento con espacio
console.log(cursos[0].firstElementChild); // Primer elemento sin espacio
console.log(cursos[0].childElementCount); //  Cantidad de elementos hijos

/**
 * TRAVERSING DEL HIJO HACIA EL PADRE
 */
const links = document.querySelectorAll('.enlace');
console.log(links[0].parentNode); // Nodo padre
console.log(links[0].parentElement); // Elemento padre
console.log(links[0].parentElement.parentElement); // Elemento padre.elemento padre

// Haciendo traversing desde una clase hacia otro elemento
const cards = document.querySelectorAll('.card');
// console.log(cards[0].parentElement.parentElement.parentElement.firstElementChild.textContent = 'Los mejores cursos');
const unDiv = cards[0].parentElement.parentElement.parentElement;
unDiv.firstElementChild.textContent = 'Los mejores cursos';

/**
 * SIBLINGS
 */
const links1 = document.querySelectorAll('.enlace');
console.log(links1[4]);
console.log(links1[4].previousSibling); // Anterior Hermano pudiendo ser espacio o salto de línea
console.log(links1[4].previousElementSibling); // Anterior Elemento Hermano
console.log(links1[4].nextSibling); // Siguiente hermano pudiendo ser espacio o salto de línea
console.log(links1[4].nextElementSibling); // Siguiente Elemento hermano 

/**
 * CREANDO ELEMENTOS
 */
const link = document.createElement('a');
link.className = 'enlace';
link.id = 'new-id';
link.setAttribute('href', '#');
link.textContent = 'New Link'; // Forma de crear texto al elemento
// link.appendChild(document.createTextNode('New Link')); // Otra forma de crear texto al elemento
document.querySelector('#secundaria').appendChild(link);
console.log(link);

/**
 * REEMPLAZANDO ELEMENTOS
 */
const newHeader = document.createElement('h3');
newHeader.id = 'new-head';
newHeader.className = 'encabezado';
newHeader.style.textAlign = 'center';
// newHeader.textContent = 'Más cursos en línea';
newHeader.appendChild(document.createTextNode('Más cursos en línea'));
// Elemento anterior será reemplazado
const oldHeader = document.getElementById('encabezado');
// Obteniendo elemento padre
const elemPadre = oldHeader.parentElement;
// Reemplazando
elemPadre.replaceChild(newHeader, oldHeader);
console.log(newHeader);

/**
 * AGREGAR Y QUITAR CLASES Y OTROS ATRIBUTOS
 */
const enlaces = document.querySelectorAll('.enlace');
const navigation = document.querySelector('#principal');
enlaces[0].remove(); // Eliminando elemento
navigation.removeChild(enlaces[1]); // Eliminando elemento hijo
console.log(enlaces);

const primerLi = document.querySelector('.enlace');
// Obteniendo y eliminando clase css
console.log(primerLi.className);
primerLi.classList.add('new-class');
primerLi.classList.remove('new-class');
primerLi.classList.remove('enlace');
console.log(primerLi);

// Leer, modificar y agregar attrs
primerLi.setAttribute('href', 'https://github.com/hayka2804');
primerLi.setAttribute('target', '_blank');
primerLi.setAttribute('data-id', 20);
console.log(primerLi.getAttribute('href'));
console.log(primerLi.getAttribute('target'));
console.log(primerLi.getAttribute('data-id'));
console.log(primerLi.hasAttribute('data-id'));
primerLi.removeAttribute('data-id');
console.log(primerLi.hasAttribute('data-id'));
