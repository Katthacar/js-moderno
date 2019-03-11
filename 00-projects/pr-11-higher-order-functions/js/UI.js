import ApiCar from './apiCar.js';

export default class UI {

  constructor() {
    this.form = document.getElementById('buscador');
    this.result = document.querySelector('#result');
    this.marca = document.getElementById('marca');
    this.year = document.getElementById('year');
    this.minimo = document.getElementById('minimo');
    this.maximo = document.getElementById('maximo');
    this.puertas = document.getElementById('puertas');
    this.transmision = document.getElementById('transmision');
    this.color = document.getElementById('color');
    this.reset = document.getElementById('reset');

    // Datos para la busqueda
    this.datosBusqueda = {
      marca: '',
      year: '',
      minimo: '',
      maximo: '',
      puertas: '',
      transmision: '',
      color: ''
    }

    this.eventListeners();
  }

  /**
   * Load all of the eventListeners
   */
  eventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initCars();
    })

    this.reset.addEventListener('click', () => this.cleanFilters());

    // Event listener for marca
    this.marca.addEventListener('input', e => {
      this.datosBusqueda.marca = e.target.value;
      this.filterCar();
    });

    // Event listener for year
    this.year.addEventListener('input', e => {
      this.datosBusqueda.year = Number(e.target.value);
      this.filterCar();
    })

    // Event listener for minimum price
    this.minimo.addEventListener('input', e => {
      this.datosBusqueda.minimo = Number(e.target.value);
      this.filterCar();
    })

    // Event listener for maximum price
    this.maximo.addEventListener('input', e => {
      this.datosBusqueda.maximo = Number(e.target.value);
      this.filterCar();
    })

    // Event listener number of doors
    this.puertas.addEventListener('input', e => {
      this.datosBusqueda.puertas = Number(e.target.value);
      this.filterCar();
    })

    // Event listener for transmition
    this.transmision.addEventListener('input', e => {
      this.datosBusqueda.transmision = e.target.value;
      this.filterCar();
    })

    // Event listener for color
    this.color.addEventListener('input', e => {
      this.datosBusqueda.color = e.target.value;
      this.filterCar();
    })

  }

  /**
   * Init carArr with all cars and render the cars on DOM
   */
  initCars() {
    this.renderCars(ApiCar.getCars());
  }

  /**
   * Render cars on DOM
   */
  renderCars(cars) {
    this.result.innerHTML = '';
    cars.forEach(car => {
      const parag = document.createElement('p');
      parag.textContent = `
      Marca: ${car.marca} - Modelo: ${car.modelo} - Color: ${car.color} - Precio: ${car.precio} 
      - ${car.puertas} puertas - Año: ${car.year} - Transmisión: ${car.transmision}
      `
      this.result.appendChild(parag);
    })
  }

  /**
   * Proccess filter of cars
   */
  filterCar() {
    const res = ApiCar.getCars()
      .filter(car => this.filterByMark(car))
      .filter(car => this.filterByYear(car))
      .filter(car => this.filterByMinPrice(car))
      .filter(car => this.filterByMaxPrice(car))
      .filter(car => this.filterByDoorNumber(car))
      .filter(car => this.filterByTransmition(car))
      .filter(car => this.filterByColor(car));
    if (res.length) this.renderCars(res);
    else this.noRenderCars();
  }

  /**
   * Filter by mark
   */
  filterByMark(car) {
    if (this.datosBusqueda.marca) {
      return car.marca === this.datosBusqueda.marca;
    } else {
      return car;
    }
  }

  /**
   * Filter by year
   * @param {*} car 
   */
  filterByYear(car) {
    if (this.datosBusqueda.year) {
      return car.year === this.datosBusqueda.year;
    } else {
      return car
    }
  }

  /**
   * Filter by minimum price
   * @param {*} car 
   */
  filterByMinPrice(car) {
    if (this.datosBusqueda.minimo) {
      return car.precio >= Number(this.datosBusqueda.minimo);
    } else {
      return car
    }
  }

  /**
   * Filter by maximum price
   * @param {*} car 
   */
  filterByMaxPrice(car) {
    if (this.datosBusqueda.maximo) {
      return car.precio <= Number(this.datosBusqueda.maximo);
    } else {
      return car
    }
  }

  /**
   * Filter by number of doors
   * @param {*} car 
   */
  filterByDoorNumber(car) {
    if (this.datosBusqueda.puertas) {
      return car.puertas <= Number(this.datosBusqueda.puertas);
    } else {
      return car
    }
  }

  /**
   * Filter by transmition
   * @param {*} car 
   */
  filterByTransmition(car) {
    if (this.datosBusqueda.transmision) {
      return car.transmision >= this.datosBusqueda.transmision;
    } else {
      return car
    }
  }

  /**
   * Filter by color
   * @param {*} car 
   */
  filterByColor(car) {
    if (this.datosBusqueda.color) {
      return car.color >= this.datosBusqueda.color;
    } else {
      return car
    }
  }

  /**
   * Cleans filters and form
   */
  cleanFilters() {
    // document.getElementById('buscador').reset();
    this.renderCars(ApiCar.getCars());
  }

  /**
   * Shows message when not finded results
   */
  noRenderCars() {
    const msgNoResults = `
    <div class='alert'><h4 class='error'>No hay resultados</h4></div>
    `
    this.result.innerHTML = msgNoResults;
  }

}
