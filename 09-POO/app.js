// Obj literal
const cliente = {
  nombre: 'Hader',
  saldo: 2000,
  tipoCliente: function () {
    let tipo;
    if (this.saldo > 1000) {
      tipo = 'Gold';
    } else {
      tipo = 'Normal';
    }
    return tipo;
  }
};
console.log(cliente.tipoCliente());

// Método por funciones
function ClienteF(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.tipoCliente = function () {
    let tipo;
    if (this.saldo > 1000) {
      tipo = 'Gold';
    } else {
      tipo = 'Normal';
    }
    return tipo;
  }
}

const person = new ClienteF('Katy', 908854434);
console.log(person.nombre, person.saldo);
console.log(person.tipoCliente());

// String
const string1 = 'String primitivo';
const string2 = new String('String objeto');
console.log(string1);
console.log(string2);

// Numbers
const number1 = 123765;
const number2 = new Number(123765);
console.log(number1);
console.log(number2);

//  Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool1);
console.log(bool2);

// Functions
const function1 = function (arg1, arg2) {
  return `function form ${arg1 + arg2}`;
};
const function2 = new Function('arg1', 'arg2', 'return arg1 + arg1');
console.log(function1(4, 5));
console.log(function2(9, 10));

// Objects
const obj = new Object({nombre: 'Carlos', saldo: 9000});
console.log(obj);

// Arrays
const arr1 = [1, 3, 5, 7, 9];
const arr2 = new Array(1, 3, 5, 7, 9);
console.log(arr1, arr2);

// Prototypes
function ClientProto(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// Crear prototype
ClientProto.prototype.tipoCliente = function (edad) {
  let tipo;
  tipo = this.saldo > 1000 ? 'Gold' : this.saldo > 500 ? 'Platinum' : 'Bronce';
  return tipo;
};
ClientProto.prototype.printSaldo = function () {
  return `Nombre: ${this.nombre} - ${this.saldo}`;
};
const cli = new ClientProto('Raúl', 988);
console.log(cli);
console.log(cli.tipoCliente());
console.log(cli.printSaldo());

// Heredar prototypes
// Banca empresas
function Empresa(nombre, saldo, tel, tipo) {
  ClientProto.call(this, nombre, saldo); // Heredando constructor de ClientProto
  this.tel = tel;
  this.tipo = tipo;
}

// Heredando prototypes
Empresa.prototype = Object.create(ClientProto.prototype);

const emp1 = new Empresa('Udemy', 39983992, 989594, 'Educación');
console.log(emp1);
console.log(emp1.nombre);
console.log(emp1.printSaldo());
console.log(emp1.tipoCliente());

// Object create
const Client = {
  printSaldo: function () {
    return `Hello ${this.nombre} tu saldo es ${this.saldo}`;
  },
  retirarSaldo: function (retiro) {
    return this.saldo -= retiro;
  }
};
const mary = Object.create(Client);
mary.nombre = 'María';
mary.saldo = 38849;
console.log(mary.printSaldo());
console.log(mary.retirarSaldo(28849));
console.log(mary);
