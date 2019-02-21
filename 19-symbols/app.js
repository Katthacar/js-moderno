/**
 * CREAR SYMBOL
 */
const symbol = Symbol();
const symbol1 = Symbol('Símbolo 1');
console.log(symbol);
console.log(symbol1);

const nombre = Symbol();
const apellido = Symbol();

const person = {}
person.nombre = 'Alberto'; // Asignando propiedad
person[nombre] = 'Daniel'; // Asignando Symbol nombre como propiedad
person[apellido] = 'Hidalgo'; // Asignando Symbol apellido como propiedad
console.log(person);
console.log(person.nombre);
console.log(person[nombre]);
console.log(person[apellido]);
