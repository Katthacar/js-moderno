import APICurrency from './apiCurrency.js';
import APICripto from './apiCripto.js';

export default class UI {

  constructor() {
    this.form = document.getElementById('formulario');
    this.selectCoins = document.getElementById('moneda');
    this.selectCriptos = document.getElementById('criptomoneda');
    this.btnCotizar = document.getElementById('btnCotizar');
    this.divResult = document.getElementById('resultado');
    this.spinner = document.getElementById('spinnerContent');
  }

  eventListeners() {
    // Se cargan las listas de monedas y criptomonedas al cargar la pág.
    window.addEventListener('load', () => {
      console.log('Documento cargado');
      // Cargando lista de monedas y criptomonedas en el DOM
      this.loadMonedas();
      this.loadCriptos();
      // Se disparan eventos de selección de monedas y criptomonedas
      this.changeSelects();
      this.cotizacion();
    });
  }

  /**
   * Carga las monedas al iniciar cargar el DOM
   */
  loadMonedas() {
    APICurrency.getCurrencies()
      .forEach(moneda => this.selectCoins.innerHTML += `<option value="${moneda.cod}">${moneda.currency}</option>`);
  }

  /**
   * Carga las criptomonedas al cargar el DOM
   */
  loadCriptos() {
    APICripto.getCoinList().then(data => {
      for (const [key, value] of Object.entries(data.Data)) {
        const option = document.createElement('option');
        option.value = value.Symbol;
        option.appendChild(document.createTextNode(value.CoinName));
        this.selectCriptos.appendChild(option);
        // selectCriptos.innerHTML += `<option value="${value.Name}">${value.Symbol}</option>`
      }
    });
  }

  /**
   * Se dispara al seleccionar los selects de monedas y criptomonedas
   */
  changeSelects() {
    this.selectCoins.addEventListener('change', () => this.validForm());
    this.selectCriptos.addEventListener('change', () => this.validForm());
  }

  /**
   * Activa / Desactiva botón de submit para realizar cotización
   */
  validForm() {
    const selectedCoin = this.selectCoins.options[this.selectCoins.selectedIndex].value;
    const selectedCripto = this.selectCriptos.options[this.selectCriptos.selectedIndex].value;
    if (selectedCoin !== '' && selectedCripto !== '') this.btnCotizar.removeAttribute('disabled');
    else this.btnCotizar.setAttribute('disabled', 'true');
  }

  /**
   * Realiza la búsqueda de la cotización
   */
  cotizacion() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedCoin = this.selectCoins.options[this.selectCoins.selectedIndex].value;
      const selectedCripto = this.selectCriptos.options[this.selectCriptos.selectedIndex].value;
      this.spinner.style.display = 'block';
      APICripto.convertCripto(selectedCoin, selectedCripto).then(
        data => {
          const res = Object.entries(Object.entries(data)[0]);
          console.log(res);
          this.renderResult(res[1][1]);
          this.spinner.style.display = 'none';
        }
      );
    });
  }

  /**
   * Realiza el renderizado del resultado de la cotización
   */
  renderResult(data) {
    this.divResult.textContent = data;
  }

}
