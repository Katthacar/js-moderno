export default class APICoords {

  /**
   * Coordenadas de la ubicación actual
   */
  static async getCurrentCoords() {
    const dataCoords = await fetch(`https://ipapi.co/json/`);
    return dataCoords.json();
  }

  /**
   * Coordenadas de oficinas UNP en Colombia
   */
  static async getUNPCoords() {
    const dataUNP = await fetch('https://www.datos.gov.co/resource/7htk-sm7n.json');
    return dataUNP.json();
  }

}
