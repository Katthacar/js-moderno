/**
 * SINGLETON PATTERN
 */
const alumnos = {

  // Todos los alumnos
  listAlum: [],

  //  Obtener un alumno
  get: function (id) {
    console.log(id);
    return this.listAlum[id];
  },

  // Crear un alumno
  create: function (data) {
    console.log(data);
    this.listAlum.push(data);
  },

  // Obtener los alumnos
  list: function () {
    return this.listAlum;
  }

}

const infoAlumno = {
  nombre: 'Juana',
  edad: 30
}

const infoAlumno1 = {
  nombre: 'Carlos',
  edad: 31
}

// Al momento de crear una instancia se va almacenando en el objeto la instancia creada en un mismo array
alumnos.create(infoAlumno);
alumnos.create(infoAlumno1);
console.log(alumnos.list());
console.log(alumnos.get(0));
console.log(alumnos.get(1));
