// getElementById
let element = document.getElementById('hero');
console.log(element.id);

// querySelector
let infoCard = document.querySelector('.card .info-card');
console.log(infoCard);

// First child
let firstLink = document.querySelector('#principal a:first-child');
console.log(firstLink);

let lastLink = document.querySelector('#principal a:last-child');
console.log(lastLink);

let nthChild = document.querySelector('#principal a:nth-child(4)');
console.log(nthChild);

// Select class
let links = document.getElementsByClassName('enlace'); // HTMLCollection
console.log(links);
links[0].style.background = 'red';
links[6].textContent = 'Gran Empleo';
links[6].style.fontWeight = 'bold';
links[6].style.color = 'darkgreen';
let linksArr = Array.from(links);
console.log(linksArr);
console.log(linksArr); // This is an Array

// Select Tags
let anchors = document.getElementsByTagName('a'); // HTMLCollection
console.log(anchors);
Array.from(anchors).forEach(a => {
  console.log(a.textContent);
});

// querySelectorAll
let links0 = document.querySelectorAll('.enlace'); // NodeList
console.log(links0);

const oodLinks = document.querySelectorAll('#principal a:nth-child(odd)'); // pares
oodLinks.forEach(l => {
  l.style.backgroundColor = 'cyan';
  l.style.color = 'black';
});
const evenLinks = document.querySelectorAll('#principal a:nth-child(even)'); // impares
evenLinks.forEach(l => {
  l.style.background = 'magenta';
  l.style.color = 'white';
  l.style.textDecoration = 'underline';
});
