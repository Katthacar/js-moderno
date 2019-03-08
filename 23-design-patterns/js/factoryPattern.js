/**
 * FACTORY PATTERN
 */
function BuildSites() {

  this.createElement = function (text, type) {
    let html;
    switch (type) {
      case 'input':
        html = new InputHTML(text);
        break;
      case 'p':
        html = new ParagraphHTML(text);
        break;
      case 'h1':
        html = new HeadingHTML(text);
        break;
      case 'div':
        html = new DivHTML(text);
        break;
    }

    html.type = type;

    html.show = function () {
      const el = document.createElement(this.type);
      if (this.type === 'input') el.setAttribute('placeholder', this.text);
      if (this.type === 'div') el.textContent = this.text;
      else el.appendChild(document.createTextNode(this.text));

      document.getElementById('app').appendChild(el);
    }

    return html;
  }

}

const InputHTML = function (text) {
  this.text = text;
}
const HeadingHTML = function (text) {
  this.text = text;
}
const ParagraphHTML = function (text) {
  this.text = text;
}
const DivHTML = function (text) {
  this.text = text;
}
const webSite = new BuildSites();

// Almacena los elementos
const elements = [];

elements.push(webSite.createElement('Input', 'input'));
elements.push(webSite.createElement('Heading', 'h1'));
elements.push(webSite.createElement('Div', 'div'));
elements.push(webSite.createElement('Paragraph', 'p'));

console.log(elements);

elements.forEach(el => {
  el.show();
})
