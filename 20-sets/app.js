/**
 * CREAR SET
 */
const set = new Set();
set.add('Shirt');
set.add('Hat');
set.add('Socks');
set.add('Dress');
set.add('Socks'); // Este no se añade porque ya existe

console.log(set);
console.log(set.size);
set.forEach((n, i) => console.log(n, i));

const numbers = new Set([2, 4, 6, 8, 10, 23, 12, 23, 6]);
console.log(numbers);
console.log(numbers.size);

// Comprobando existencia
console.log(numbers.has(10));

numbers.forEach((n, i) => console.log(n, i));

// Convertir Set en Array
const numbersArr = [...numbers];
console.log(numbersArr);
numbersArr.forEach((n, i) => console.log(i, n));
