/**
 * VARIABLES
 **/
const carrito = document.getElementById('carrito');
const listaCursos = document.getElementById('lista-cursos');
const vaciarCarrito = document.getElementById('vaciar-carrito');

/**
 * EVENT-LISTENERS
 **/
function loadEventListeners() {
  // Cargando cursos del LS
  document.addEventListener('DOMContentLoaded', loadCoursesDOM);
  // Al presionar agregar carrito
  listaCursos.addEventListener('click', getInfoCurso);
  //  Al presionar borrar-curso
  carrito.addEventListener('click', delCourseDOM);
  // Vaciar carrito
  vaciarCarrito.addEventListener('click', deleteAllCourses);
}

/**
 * FUNCTIONS
 **/
// Añade curso al carrito
function getInfoCurso(e) {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains('agregar-carrito')) {
    const card = target.parentElement.parentElement;
    const infoCard = card.querySelector(':nth-child(2)');
    const objCourse = {
      dataId: target.getAttribute('data-id'),
      imgCurso: card.firstElementChild.getAttribute('src'),
      nombreCurso: infoCard.firstElementChild.textContent,
      instructor: infoCard.querySelector(':nth-child(2)').textContent,
      precio: infoCard.querySelector(':nth-child(4)').textContent.split('$')[1].trim(),
      descuento: infoCard.querySelector(':nth-child(4)').textContent.split('$')[2].trim(),
    };

    makeCursoCar(objCourse);
  }
}

// Arma el DOM para agregar al carrito de compras
function makeCursoCar(objCourse, isLoaded) {
  const listaCarrito = carrito.querySelector('#lista-carrito');
  const bodyCarrito = listaCarrito.lastElementChild;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><img src="${objCourse.imgCurso}" width="100" alt="${objCourse.nombreCurso}"></td>
    <td>${objCourse.nombreCurso}</td>
    <td>$${objCourse.precio}</td>
    <td><a href="#" class="borrar-curso" data-id="${objCourse.dataId}">X</a></td>
  `;
  if (!isLoaded) addCourseLS(objCourse); // Si la pág. no se carga por primera vez se guarda en el LS
  bodyCarrito.appendChild(tr); // Add course to DOM
}

// Agrega el curso al LS
function addCourseLS(objCourse) {
  const courses = loadCourseLS();
  courses.push(objCourse);
  localStorage.setItem('courses', JSON.stringify(courses));
}

// Carga los cursos del LS
function loadCourseLS() {
  const LSCourses = localStorage.getItem('courses');
  return LSCourses === null ? [] : JSON.parse(LSCourses);
}

// Carga los cursos al DOM
function loadCoursesDOM(isLoaded) {
  const courses = loadCourseLS();
  if (courses.length > 0) {
    courses.forEach(c => {
      makeCursoCar(c, isLoaded);
    });
  }
}

// Elimina curso del DOM
function delCourseDOM(e) {
  e.preventDefault();
  if (e.target.className === 'borrar-curso') {
    const trCurso = e.target.parentElement.parentElement;
    // const cursoDel = trCurso.querySelector(':nth-child(2)').textContent;
    const courses = loadCourseLS();
    courses.forEach((c, index) => {
      if (e.target.getAttribute('data-id') === c.dataId) {
        courses.splice(index, 1); // Borrando curso del array
        localStorage.setItem('courses', JSON.stringify(courses));
        trCurso.remove();
      }
    });
  }
}

// Vaciar carrito
function deleteAllCourses(e) {
  e.preventDefault();
  localStorage.removeItem('courses'); // Delete all from LS
  e.target.previousElementSibling.lastElementChild.innerHTML = ''// Delete all from DOM
}

/**
 * STARTING
 */
loadEventListeners();
