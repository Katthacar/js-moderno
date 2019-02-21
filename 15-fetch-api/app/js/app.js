document.getElementById('btnTxt').addEventListener('click', cargarTxt);
document.getElementById('btnJSON').addEventListener('click', cargarJSON);
document.getElementById('btnAPI').addEventListener('click', cargarAPI);

function cargarTxt() {
  fetch('datos.txt')
    .then((res) => res.text())
    .then((data) => document.getElementById('resultado').innerHTML = data)
    .catch((err) => console.log(err));
}

function cargarJSON() {
  fetch('empleados.json')
    .then(res => res.json())
    .then(data => {
      let html = `<table style="width:100%"><tr><th>Nombre</th><th>Puesto</th></tr>`;
      data.forEach(emp => {
        html += `<tr><td>${emp.nombre}</td><td>${emp.puesto}</td></tr>`;
      });
      html += '</table>';
      document.getElementById('resultado').innerHTML = html;
    })
    .catch(err => console.log(err))
}

function cargarAPI() {
  fetch('http://uinames.com/api/?amount=50&')
    .then(res => res.json())
    .then(data => {
      let html = `<table style="width:100%"><tr><th>Nombre</th><th>Género</th><th>Región</th></tr>`;
      data.forEach(people => {
        html += `<tr><td>${people.name}</td><td>${people.gender}</td><td>${people.region}</td></tr>`;
      });
      html += '</table>';
      document.getElementById('resultado').innerHTML = html;
    })
    .catch(err => console.log(err))
}
