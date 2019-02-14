const btn1 = document.getElementById('boton1');
const btn2 = document.getElementById('boton2');
btn1.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'empleado.json', true)

  xhr.onload = function () {
    if (this.status === 200) {
      const person = JSON.parse(this.responseText);
      document.getElementById('empleado').innerHTML = `
      <ul>
        <li>ID: ${person.id}</li>
        <li>Nombre: ${person.nombre}</li>
        <li>Empresa: ${person.empresa}</li>
        <li>Trabajo: ${person.trabajo}</li>
      </ul>
      `;
    }
  };

  xhr.send();
});

btn2.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'empleados.json', true);

  xhr.onload = function () {
    const empleados = JSON.parse(xhr.responseText);
    let el = '';
    empleados.forEach(emp => {
      const li = `
        <ul>
          <li>ID: ${emp.id}</li>
          <li>Nombre: ${emp.nombre}</li>
          <li>Empresa: ${emp.empresa}</li>
          <li>Trabajo: ${emp.trabajo}</li>
        </ul>
      `;
      el += li;
    });
    document.getElementById('empleados').innerHTML = el;
  };

  xhr.send();
});
