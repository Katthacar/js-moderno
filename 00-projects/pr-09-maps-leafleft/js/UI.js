import APIMaps from './APIMaps.js';

export default class UI {

  constructor() {
    this.map = new APIMaps();
    this.txtSearch = document.getElementById('search');

    this.eventListeners();
  }

  eventListeners() {
    this.txtSearch.addEventListener('keyup', (e) => this.searching(e));
  }

  searching(e) {
    this.map.renderPins(e.target.value);
  }

}
