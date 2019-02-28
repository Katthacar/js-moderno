import API from './api.js';

export default class UI {

  constructor() {
    this.form = document.getElementById('form-buscar');
    this.txtArtista = document.getElementById('artista');
    this.txtCancion = document.getElementById('cancion');
    this.btnBuscar = document.getElementById('btnBuscar');
    this.result = document.getElementById('resultado');
    this.spinner = document.getElementById('spinner');
    this.eventListeners();
  }

  eventListeners() {

    this.txtArtista.addEventListener('blur', () => this.validSubmit());
    this.txtCancion.addEventListener('blur', () => this.validSubmit());

    this.form.addEventListener('submit', () => this.searchLetter());

  }

  validSubmit() {
    if (this.txtArtista.value === '' || this.txtCancion.value === '')
      this.btnBuscar.setAttribute('disabled', 'true');
    else this.btnBuscar.removeAttribute('disabled');
  }

  async searchLetter() {
    const api = new API();
    this.spinner.style.display = 'block';
    const lyric = await api.getLyrics(this.txtArtista.value, this.txtCancion.value);
    this.spinner.style.display = 'none';
    this.renderLyric(lyric);
  }

  renderLyric(lyric) {
    this.result.innerHTML = '';
    this.result.innerHTML = lyric.lyrics ? lyric.lyrics : 'NO HAY LETRA QUE COINCIDA CON LA BÚSQUEDA';
  }

}
