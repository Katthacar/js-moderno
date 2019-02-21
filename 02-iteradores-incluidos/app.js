// Ireradores especiales incluidos en js
const ciudades = ['London', 'New York', 'Madrid', 'Paris', 'Munich'];
const ordenes = new Set([123, 456, 896, 753, 990]);
const datos = new Map();
datos.set('nombre', 'Manuel');
datos.set('profesion', 'Ingeniero');

/**
 * Entries
 */
// Entries para ciudades
for (let orden of ciudades.entries()) {
  console.log(orden);
  console.log(orden[0]);
  console.log(orden[1]);
}

// Entries para ordenes
for (const orden of ordenes.entries()) {
  console.log(orden);
}

// Entries para datos
for (const dato of datos.entries()) {
  console.log(dato);
}

/**
 * Values
 */
// Values para ciudades
for (let ciudad of ciudades.values()) {
  console.log(ciudad);
}

// Values para ordenes
for (const orden of ordenes.values()) {
  console.log(orden);
}

// Values para datos
for (const dato of datos.values()) {
  console.log(dato);
}
