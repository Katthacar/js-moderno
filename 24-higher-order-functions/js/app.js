const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 31000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A4',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A6',
		year: 2010,
		precio: 35000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2019,
		precio: 80000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A3',
		year: 2017,
		precio: 55000,
		puertas: 2,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2017,
		precio: 99000,
		puertas: 2,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 99000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A4',
		year: 2016,
		precio: 30000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	}
];
console.table(autos);

// forEach se recomienda cuando es necesario recorrer todos los elementos del Array
autos.forEach(auto => console.table(auto));

// map retorna un nuevo array que ha recorrido cada elemento del array en función
let at = autos.map(auto => auto.year === 2016 && auto);
console.log(at);

// filter crea un arreglo basándose en una prueba evaluada
let res = autos.filter(auto => auto.year === 2016);
console.log(res);

// find encuentra en el array el primer elemento que cumpla la condición
let finded = autos.find(auto => auto.precio === 40000);
console.log(finded);

// reduce reduce un conjunto de elementos a un único resultado
// Aquí solo se acumula un total con el precio de cada auto
let reduced = autos.reduce((totPrecio, auto) => totPrecio + auto.precio, 0)
console.log(reduced);

// Aquí se pasan más argumentos para obtener el auto más costoso
let autoCostoso = autos.reduce((car, auto, index) => {
	if (index < autos.length && car.precio < auto.precio) car = auto
	return car;
})
console.log('cc', autoCostoso);

// Aquí se obtiene el valor más alto del array
const arr = [5, 6, 20, 4, 8, 1, 9, 12, 17]
let redu = arr.reduce((total, number, index) => {
	if (index < arr.length && total < number) total = number;
	return total;
})
console.log('redu ', redu);

// some retorna un boolean si existe al menos un elemento que cumpla la condición
const exists = autos.some(auto => auto.year === 2016);
console.log(exists);

