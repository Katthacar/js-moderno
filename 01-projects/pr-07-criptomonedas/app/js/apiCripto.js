export default class APICripto {

  constructor() {}
  
  /**
   * Obtiene la lista de coins
   */
  static async getCoinList() {
    const coinList = await fetch('https://min-api.cryptocompare.com/data/all/coinlist');
    return coinList.json();
  }
  
  /**
   * Obtiene respuesta de la conversión de la criptomoneda
   * {COP: 349305.96}
   */
  static async convertCripto(codeCoin, codeCurrency) {
    const baseUrl = 'https://min-api.cryptocompare.com/data/price?'; //fsym=BTC&tsyms=TND;
    // const baseUrl = 'https://min-api.cryptocompare.com/data/pricemultifull?'; //fsym=BTC&tsyms=TND;
    const apiKey = '';
    const response = await fetch(`${baseUrl}fsym=${codeCoin}&tsyms=${codeCurrency}`)
    return response.json();
  }

}
