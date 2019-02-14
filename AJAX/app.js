document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
  // Crear obj xmlhttprequest
  const xhr = new XMLHttpRequest(); // ReadyState => 0 (Aquí se inicializa el readyState)

  // Abrir conexión
  xhr.open('GET', 'datos.txt', true); // ReadyState => 1 (Aquí se establece la conexión)

  // PROCESO NUEVA
  // Al cargar la pág.
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('listado').textContent = this.responseText;
    }
  };

  // PROCESO ANTIGUA
  xhr.onreadystatechange = function () {
    console.log(`Estado ${this.readyState}`);
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  };
  // Ready states
  /*
  0 - No inicializado
  1 - Conexión establecida
  2 - Recibido
  3 - Procesando
  4 - Respuesta lista
   */

  // Enviar request
  xhr.send();
}
