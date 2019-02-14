// Callbacks en foreach
const cities = ['London', 'Paris', 'Brazilia', 'Buenos Aires', 'Viena', 'New York', 'Madrid', 'Moscow'];

// Inline Callback
cities.forEach(function (city) {
  console.log(city);
});

// Con función definida
function callback(city) {
  console.log(city);
}

cities.forEach(callback);

/**
 * EJEMPLO DE ACTUALIZACIÓN DE LISTA DESPUÉS DE HABERSE MOSTRADO CON ANTERIORIDAD
 */
const countries = ['France', 'Spain', 'Portugal', 'Brazil', 'England', 'Russia', 'Argentina'];

// Agrega un país a la lista de paises después de 4 segundos
function addCountry(country, callback) {
  setTimeout(function () {
    countries.push(country);
    callback();
  }, 3000);
}

// Se muestran los paises después de 2 segundos
function showCountries() {
  setTimeout(function () {
    let html = '';
    countries.forEach(function (country) {
      html += `<li>${country}</li>`;
    });
    document.getElementById('app').innerHTML = html;
  }, 2000);
}

addCountry('Germany', showCountries);
showCountries();
