class Seguro {
  constructor(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
  }

  cotizarSeguro() {
    /**
     * 1 = Americano 1,15
     * 2 = Asiatico 1,05
     * 3 = Europeo 1,35
     */
    let cantidad;
    const base = 2000;
    switch (this.marca) {
      case '1':
        cantidad = base * 1.15;
        break;
      case '2':
        cantidad = base * 1.05;
        break;
      case '3':
        cantidad = base * 1.35;
        break;
    }

    // Leer año
    const diferencia = new Date().getFullYear() - this.anio;
    // Cada año de dif se reduce el 3% el valor del seguro
    cantidad -= diferencia * 3 * cantidad / 100;

    // Si el seguro es básico 30% +, completo 50% +
    cantidad *= this.tipo === 'basico' ? 1.30 : 1.50;
    return cantidad;
  }
}


// Interfaz
class Interfaz {
  showMsg(msg, tipo) {
    const div = document.createElement('div');
    if (tipo === 'error') {
      div.classList.add('error');
    } else {
      div.classList.add('success');
    }
    div.innerHTML = `${msg}`;
    form.insertBefore(div, document.querySelector('.form-group'));
    setTimeout(() => {
      div.remove();
    }, 3000);
  }

  showResult(seguro, total) {
    const result = document.getElementById('resultado');
    const spinner = document.querySelector('#cargando img');
    let marca;
    switch (seguro.marca) {
      case '1':
        marca = 'Americano';
        break;
      case '2':
        marca = 'Asiatico';
        break;
      case '3':
        marca = 'Europeo';
        break;
    }
    // Crear div
    const div = document.createElement('div');
    div.innerHTML = `
  <p class="header">Tu resumen</p>
  <p>Marca: ${marca}</p>
  <p>Año: ${seguro.anio}</p>
  <p>Tipo: ${seguro.tipo}</p>
  <p>Total: $ ${total}</p>
  `;
    result.innerHTML = '';
    spinner.style.display = 'block';
    setTimeout(() => {
      spinner.style.display = 'none';
      result.appendChild(div);
    }, 3000);
  }
}

// Event-listeners
const form = document.getElementById('cotizar-seguro');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Leyendo marca seleccionada
  const marca = document.getElementById('marca');
  const selectedMarca = marca.options[marca.selectedIndex].value;
  // Leyendo año seleccionado
  const anio = document.getElementById('anio');
  const selectedAnio = anio.options[anio.selectedIndex].value;
  // Leyendo valor de radioButton
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  // Crear instancia de Interfaz
  const interfaz = new Interfaz();
  if (selectedMarca === '' || selectedAnio === '' || tipo === '') {
    interfaz.showMsg('Faltan datos, Revisar formulario!', 'error');
  } else {
    const seguro = new Seguro(selectedMarca, selectedAnio, tipo); // Instanciando Seguro
    const cantidad = seguro.cotizarSeguro();
    // Mostrar resultado
    interfaz.showResult(seguro, cantidad);
    interfaz.showMsg('Cotizando ...', 'success');
  }
});

const max = new Date().getFullYear(), min = max - 20;
const selectAnio = document.getElementById('anio');
for (let i = max; i >= min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  selectAnio.appendChild(option);
}
