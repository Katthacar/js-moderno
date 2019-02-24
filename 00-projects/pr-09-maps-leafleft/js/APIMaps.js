import APICoords from './APICoords.js';

export default class APIMaps {

  constructor() {
    // Iniciar el mapa
    this.renderMap('');
  }

  async renderMap(filtro) {
    // Inicializa mapa
    this.layersGroup = new L.layerGroup();
    const dataCoord = await APICoords.getCurrentCoords();
    this.map = L.map('map').setView([`${dataCoord.latitude}`, `${dataCoord.longitude}`], 13);
    const linkMap = '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    await L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: `&copy; ${linkMap} Contributors`,
      maxZoom: 18,
    }).addTo(this.map);

    this.renderPins(filtro);

  }

  /**
   * Realiza búsqueda de datos con filtro
   * @param {*} filtro 
   */
  async getDataUNP(filtro) {
    const dataUNP = await APICoords.getUNPCoords();
    const newData = dataUNP.filter(d => d.nombre_sede.toLowerCase().includes(filtro.toLowerCase()));
    return newData;
  }

  /**
   * Renderiza los pines en el mapa
   * @param {*} filtro 
   */
  renderPins(filtro) {
    this.layersGroup.clearLayers();
    this.getDataUNP(filtro).then(data => {
      data.forEach(d => {
        if (d.ubicaci_n !== undefined) {
          const {
            nombre_sede: sede, codigo_dane: codDane, ciudad: city, correo: email, tel_fono: tel, ubicaci_n: coords
          } = d;
          this.layersGroup.addLayer(
            new L.marker([coords.latitude, coords.longitude])
              .bindPopup(`
              <p>Sede: ${sede}</p>
              <p>Cod. DANE: ${codDane}</p>
              <p>Ciudad: ${city}</p>
              <p>Correo: ${email}</p>
              <p>Tel: ${tel}</p>
              `)
          );
        }
      });
      this.layersGroup.addTo(this.map);
    });
  }

}
