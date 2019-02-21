import Presupuesto from './presupuesto.js';
import Gasto from "./gasto.js";

export default class Interfaz {
  constructor() {
    this.form = document.getElementById('agregar-gasto');
    this.divGastos = document.getElementById('gastos');
    this.txtGasto = document.getElementById('gasto');
    this.txtCantidad = document.getElementById('cantidad');
    this.txtGasto = document.getElementById('gasto');
    this.btnDefPres = document.getElementById('def-pres');
    this.btnAgregar = document.getElementById('agregar');
    this.total = document.getElementById('total');
    this.restante = document.getElementById('restante');
    this.arrGastos = [];
    this.presupuesto = null;
    this.gasto = null;
  }

  eventListeners() {
    this.btnDefPres.addEventListener('click', (e) => {
      e.preventDefault();
      this.getPresInicial();
    });

    // Eventos para validar inputs en Gasto y Cantidad
    this.txtGasto.addEventListener('keyup', () => {
      this.validInputs();
    });
    this.txtCantidad.addEventListener('keyup', () => {
      this.validInputs();
    });

    // Evento de submit (btn Agregar)
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addGasto();
    });
  }

  /**
   * Obtiene el valor del presupuesto inicial
   * @returns {Promise<void>}
   */
  async getPresInicial() {
    const {value: pres} = await Swal.fire({
      title: 'Ingrese su presupuesto',
      input: 'number',
      showCancelButton: true,
      inputValidator: (value) => {
        return (!value && 'Debe ingresar un valor para el presupuesto!')
          || ((isNaN(Number(value)) || Number(value) < 0) && 'El valor introducido es inválido');
      }
    });

    if (pres) {
      Swal.fire(
        `Su presupuesto: $${pres} 
      Ingrese ahora sus gastos en el formulario`);
      this.btnDefPres.setAttribute('disabled', 'true');
      this.txtGasto.removeAttribute('disabled');
      this.txtCantidad.removeAttribute('disabled');
      this.presupuesto = new Presupuesto(pres);
      this.total.textContent = this.presupuesto.total;
      this.restante.textContent = this.presupuesto.restante;
    }
  }

  /**
   * Valida textos en los inputs de Gasto y Cantidad
   */
  validInputs() {
    const reg = new RegExp('^\\s*(?=.*[1-9])\\d*(?:\\.\\d{1,2})?\\s*$');
    if (this.txtGasto.value === '' || !reg.test(this.txtCantidad.value)) {
      this.btnAgregar.setAttribute('disabled', 'true');
    } else {
      this.btnAgregar.removeAttribute('disabled');
    }
  }

  addGasto() {
    this.gasto = new Gasto(this.txtGasto.value, this.txtCantidad.value);
    // Validando que operación de resta del gasto no deje al restante con menos del 10%
    if (!this.validOperacion()) { // Si valor a agregar es
      this.pushGasto(this.gasto); // Agrega gasto a la lista de gastos
      this.presupuesto.restante -= this.gasto.valor;// Se resta valor del gasto del restante
      this.restante.textContent = this.presupuesto.restante;
      this.changeAlertRestante();
      this.form.reset();
    } else {
      Swal.fire(
        'Operación Inválida!',
        'Valor del gasto ingresado supera el 10% del restante de su presupuesto!',
        'error'
      );
    }
  }

  /**
   * Se valida si ingreso del gasto supera el 10% del presupuesto total
   * @returns {boolean}
   */
  validOperacion() {
    return ((this.presupuesto.restante - this.gasto.valor) < this.presupuesto.total * .1);
  }

  /**
   * Agrega Gasto a la lista de gastos
   * @param objGasto
   */
  pushGasto(objGasto) {
    this.arrGastos.push(objGasto); // Agrega el objeto gastos a la lista de gastos
    const liGasto = document.createElement('li');
    liGasto.innerHTML = `
    <li class="list-group-item">${objGasto.nombre} 
      <span class="badge">${objGasto.valor}</span>
    </li>
    `;
    this.divGastos.firstElementChild.appendChild(liGasto);
  }

  changeAlertRestante() {
    if (this.presupuesto.restante <= this.presupuesto.total * .2) {
      this.restante.parentElement.parentElement.classList.remove('alert-success');
      this.restante.parentElement.parentElement.classList.add('alert-warning');
    }
  }

}
