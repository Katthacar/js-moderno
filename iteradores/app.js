// Recorrer un array
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender', 'Javascript'];

// For
for (let i = 0; i < pendientes.length; i++) {
  console.log('For => ', pendientes[i]);
}

// For Each
pendientes.forEach(element => {
  console.log(`ForEach => ${element}`);
});

pendientes.forEach((element, index) => {
  console.log(`ForEach with Index: ${index}, Element: ${element}`);
});

// For In
for (const i in pendientes) {
  console.log('In =>', pendientes[i]);
}

// For of
for (const i of pendientes) {
  console.log(`Of => ${i}`);
}

// Map
const cars = [
  { id: 1000, marca: 'Leallo' },
  { id: 1001, marca: 'BMW' },
  { id: 1002, marca: 'Hunday' },
  { id: 1003, marca: 'Montora' },
  { id: 1004, marca: 'Virtoa' },
];
const marcas = cars.map(car => car.marca);
console.log(`Marcas: ${marcas}`);

// Print object with for
const auto = {
  model: 'Camaro',
  motor: '7.8',
  anio: 1988,
  marca: 'Chevrolet'
};
for (let atr in auto) {
  console.log(`${atr}: ${auto[atr]}`);
}
