/**
 * CREAR MAP
 */
const client = new Map();
client.set('nombre', 'Alberto');
client.set('tipo', 'premium');
client.set('saldo', 9000);
client.delete('saldo');

console.log(client);
console.log(client.get('tipo'));
console.log(client.entries());
console.log(client.size);
console.log(client.has('nombre'));

client.clear();
console.log(client);

// Pasando valores por default
const pacient = new Map(
  [
    ['nombre', 'NA'],
    ['room', 000]
  ]
);
pacient.set('nombre', 'Andres');
pacient.set('edad', '98');
pacient.set('room', 300);
pacient.set('diagnostico', 'Bulimia');
console.log(pacient);

pacient.forEach((p, i) => console.log(`Índice: ${i}: \nPaciente: ${p}`));
