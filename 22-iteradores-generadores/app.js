/**
 * CREANDO ITERADORES DE FORMA MANUAL
 */

function crearIterador(carrito) {

  // Inicializando indice
  let i = 0;
  return {
    obj: 999,
    next: () => {
      const fin = i >= carrito.length; // True cuando i es >= al tamaño del carrito
      const value = fin ? undefined : carrito[i++];
      return {
        fin: fin,
        valor: value
      }
    }
  }
}

carrito = ['producto 1', 'producto 2', 'producto 3', 'producto 4', 'producto 5'];

const recorrerCarro = new crearIterador(carrito);
console.log(recorrerCarro.next());
console.log(recorrerCarro.next());
console.log(recorrerCarro.next());
console.log(recorrerCarro.next());
console.log(recorrerCarro.next());
console.log(recorrerCarro.next());

/**
 * GENERADORES - Son funciones que retornan un ITERADOR
 */
const crearGenerador = function* () { // Para crear un generador se utiliza * después de la palabra function
  // Cada que se invoca el método .next() en el generador retornará los datos de los yields
  yield 1;
  yield 'Nombre';
  yield 4 + 7;
  yield { 'type': 'Premium' }
}

const it = crearGenerador();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* recorrerCarritoGen(carrito) {
  for(let car of carrito) yield car;
}

const rcg = recorrerCarritoGen(carrito);
console.log(rcg.next().value);
console.log(rcg.next().value);
console.log(rcg.next().value);
console.log(rcg.next().value);
console.log(rcg.next().value);
console.log(rcg.next().value); // undefined
