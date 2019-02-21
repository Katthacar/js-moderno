document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado Ajax e imprimir resultados
function cargarNombres(e) {
  e.preventDefault();

  // Leyendo variables
  const origen = document.getElementById('origen');
  const selectedOrigen = origen.options[origen.selectedIndex].value;
  const genero = document.getElementById('genero');
  const selectedGenero = genero.options[genero.selectedIndex].value;
  const cantidad = document.getElementById('numero').value;

  /**
   * ARMANDO URL PARA LA PETICIÓN
   */
  let url = 'http://uinames.com/api/?';
  // Si existe origen agregarlo a la url
  if (selectedOrigen !== '') url += `region=${selectedOrigen}&`;
  if (selectedGenero !== '') url += `gender=${selectedGenero}&`;
  if (cantidad !== '') url += `amount=${cantidad}&`;

  console.log(url);

  /**
   * CONECTANDO CON AJAX
   */
  const xhr = new XMLHttpRequest(); // Creando obj xhr

  xhr.open('GET', url, true); // Abriendo conexión

  // Datos de impresión del template
  xhr.onload = function () {
    if (this.status === 200) {
      const nombres = JSON.parse(this.responseText);
      // Generar HTML
      let htmlNombres = '<h2>Nombres Generados</h2>';
      htmlNombres += '<ul class="lista">';

      // Renderizar nombres
      nombres.forEach(nombre => {
        htmlNombres += `<li>${nombre.name}</li>`;
      });
      htmlNombres += '</ul>';
      document.getElementById('resultado').innerHTML = htmlNombres;
    }
  };

  // Enviando petición
  xhr.send();
}
