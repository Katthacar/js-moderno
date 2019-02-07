export default class Presupuesto {
  constructor(total) {
    this.total = total;
    this.restante = total;
  }

  descontar(valor) {
    this.restante -= valor;
    // if (this.total < valor)
    //   this.total -= valor;
  }
}
