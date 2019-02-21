/**
 * ASIGNACIÓN POR DESTRUCTURING
 */
const client = {
  nombre: 'Carlos',
  tipo: 'gold'
}

let nombre = 'Manuel';
let tipo = 'plata';

({ nombre, tipo } = client);

console.log(nombre, tipo);

// Destructurando objetos complejos
const client1 = {
  type: 'premium',
  name: 'Alicia',
  datos: {
    ubicacion: {
      ciudad: 'Montería',
      pais: 'Colombia'
    },
    cuenta: {
      desde: '12-12-2014',
      saldo: 5000
    }
  }
}

let { type = 'basico', name = 'NA', datos, datos: { ubicacion }, datos: { cuenta: { desde } } } = client1;
console.log(datos);
console.log(ubicacion);
console.log(desde);
console.log(type, name, datos.ubicacion, datos.ubicacion.ciudad, datos.cuenta.desde, datos.cuenta.saldo);

/**
 * DESTRUCTURING DE ARRAYS
 */
const cities = ['London', 'New York', 'Madrid', 'Paris'];
const [firstCity, secondCity] = cities;
console.log(firstCity, secondCity);
// Destructurando solo los valores que se necesiten
const [primerCity, , , fourthCity] = cities;
console.log(primerCity, fourthCity);

const client2 = {
  clase: 'premium',
  valor: '89093',
  datos: {
    nombre: 'patrol',
    apellido: 'Monarca',
    residencia: {
      ciudad: 'Argentina'
    }
  },
  movimientos: ['enero', 'febrero', 'marzo', 'abril']
}

let { datos: { residencia }, movimientos } = client2;
console.log(residencia.ciudad);
console.log(movimientos[2]);

/**
 * DESTRUCTURING A FUNCIONES
 */
// Forma antigua
function reservacion(completo, opciones) {
  opciones = opciones || {};
  let metodo = opciones.metodoPago,
    cantidad = opciones.cantidad,
    dias = opciones.dias;
  console.log('Anterior', opciones, metodo, cantidad, dias);
}

reservacion(true,
  {
    metodoPago: 'tarjeta',
    cantidad: 3000,
    dias: 3
  }
);

// Forma actual
function reservacion1(completo, opciones) {

  // Aquí se crea alias y se pasan valores por defecto
  let { metodoPago: metodo = 'Debito', cantidad: cant = 25000, dias: days = 30 } = opciones;
  console.log('Actual', opciones, metodo, cant, days);
}

reservacion1(true,
  {
    metodoPago: undefined,
    cantidad: 3000,
    dias: 3
  }
);
