import APIEventBrite from './apiEventBrite.js';

export default class Interfaz {

  constructor() {
    this.event = document.getElementById('event');
    this.categories = document.getElementById('categories');
    this.btnSearch = document.getElementById('btnSearch');
    this.eventResults = document.getElementById('eventResults');
    this.spinner = document.getElementById('spinner');
  }

  eventListeners() {
    window.addEventListener('load', () => this.loadCategories());
    this.btnSearch.addEventListener('click', (e) => this.search());

    this.eventsInputs();
  }

  /**
   * Carga las categorías de eventos
   */
  loadCategories() {
    APIEventBrite.getCategories().then(res => {
      res.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.appendChild(document.createTextNode(category.name));
        this.categories.appendChild(option);
      });
      // option.value = 
      // this.categories.
    });
  }

  /**
   * Eventos para los inputs
   */
  eventsInputs() {
    this.event.addEventListener('blur', () => this.validSubmit());
    this.categories.addEventListener('blur', () => this.validSubmit());
  }

  /**
   * Activa / Desactiva el botón de submit
   */
  validSubmit() {
    const selectedCategory = this.categories.options[this.categories.selectedIndex].value;
    if (this.event.value === '' || selectedCategory === '') this.btnSearch.setAttribute('disabled', true);
    else this.btnSearch.removeAttribute('disabled');
  }

  /**
   * Búsqueda de eventos
   */
  search() {
    const selectedCategory = this.categories.options[this.categories.selectedIndex].value;
    this.spinner.style.display = 'block';
    APIEventBrite.getEvents(this.event.value, selectedCategory).then(data => {
      this.showEvents(data.events);
      this.spinner.style.display = 'none';
    }
    );
  }

  showMsgStatus(status, msg) {
    const div = document.createElement('div');
    div.className = 'alert mt-4';
    div.classList.add(status === 'OK' ?
      'alert-success' :
      'alert-danger');
    div.textContent = msg;
    document.getElementById('buscador').appendChild(div);
    setTimeout(() => div.remove(), 3000);
  }

  /**
   * Imprime eventos en el DOM
   */
  showEvents(events) {
    this.eventResults.innerHTML = '';
    if (events.length === 0) {
      this.showMsgStatus('WARN', 'No se encontraron eventos');
    } else {
      let listado = '';
      events.forEach(event => {
        listado += `
        <div class="col-md-4 mb-4">
        <div class="card">
        <img class="img-fluid mb-2" src="${event.logo !== null ? event.logo.url : ''}"> 
        <div class="card-body">
        <div class="card-text">
        <h2 class="text-center">${event.name.text}</h2>
        <p class="lead text-info">Información del evento</p>
        <p>${event.description.text.substring(0, 280)}...</p>
        
        <span class="badge badge-primary">Capacidad: ${event.capacity}</span>
        <span class="badge badge-secondary">Fecha y hora: ${event.start.local}</span>
        
        <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>  
        </div>
        </div>
        
        </div>
        </div>`;
      });
      this.eventResults.innerHTML = listado;
    }
  }

}
