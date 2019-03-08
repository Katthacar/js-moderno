/**
 * BUILDER PATTERN
 */
class Formulario {

  constructor() {
    this.campos = [];
  }

  addField(type, text) {
    let campos = this.campos;
    let campo;
    switch (type) {
      case 'text':
        campo = new InputText(text);
        break;
      case 'email':
        campo = new InputEmail(text);
        break;
      case 'button':
        campo = new InputButton(text);
        break;

      default:
        throw new Error('Tipo no válido' + type);
    }
    campos.push(campo);
    this.renderHTML(campo);
  }

  renderHTML(campo){
    document.getElementById('app').appendChild(campo.createElement());
  }

}

class Inputs {

  constructor(text) {
    this.text = text;
  }

}

class InputText extends Inputs {
  constructor(text) {
    super(text);
  }

  createElement() {
    const inputText = document.createElement('input');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', this.text);
    return inputText;
  }
}

class InputEmail extends Inputs {
  constructor(text) {
    super(text);
  }

  createElement() {
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('placeholder', 'ejemplo@ejemplo.com');
    return inputEmail;
  }
}

class InputButton extends Inputs {
  constructor(text) {
    super(text);
  }

  createElement() {
    const inputButton = document.createElement('button');
    inputButton.setAttribute('type', 'submit');
    inputButton.textContent = this.text;
    return inputButton;
  }
}

// Instanciar formulario
const form = new Formulario();
form.addField('text', 'Tu nombre');
form.addField('text', 'Tu apellido');
form.addField('email', 'Texto en tipo Email');
form.addField('button', 'Enviar');
console.log(form.campos);
