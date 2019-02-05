class Cliente {
  constructor(nombre, apellido, saldo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saldo = saldo;
  }

  printSaldo() {
    return `Hello ${this.nombre} ${this.apellido}, tu saldo es de: ${this.saldo}`;
  }

  tipoClient() {
    let tipo;
    if (this.saldo > 10000) tipo = 'Gold';
    else tipo = 'Plata';
    return tipo;
  }

  retirarSaldo(retiro) {
    return this.saldo -= retiro;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }

}

const hector = new Cliente('Hector', 'Lozano', 18000);
console.log(hector);
console.log(hector.printSaldo());
console.log(hector.tipoClient());
hector.retirarSaldo(10000);
console.log(hector.printSaldo());
console.log(hector.tipoClient());
console.log(Cliente.bienvenida());

class AdvancedClient extends Cliente {
  constructor(nombre, apellido, saldo, tel, tipo) {
    super(nombre, apellido, saldo);
    this.tel = tel;
    this.tipo = tipo;
  }
}

const aldo = new AdvancedClient('Aldo', 'Montañez', 8998, 5588893, 'Roca');
console.log(aldo);
console.log(aldo.printSaldo());
console.log(aldo.tipoClient());
aldo.retirarSaldo(10000);
console.log(aldo.printSaldo());
console.log(aldo.tipoClient());
console.log(Cliente.bienvenida());
