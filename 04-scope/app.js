// Scope
var a = 'A';
let b = 'B';
const c = 'C';

// Scope de function
function functionScope() {
  var a = 'A';
  let b = 'B';
  const c = 'C';
  console.log('Function:', a, b, c);
}

// Scope de bloque {}
if (true) {
  var a = 'AA';
  let b = 'BB';
  const c = 'CC';
  console.log('Bloque if:', a, b, c);
}

console.log('Global:', a, b, c);
functionScope();

