async function loadClients() {
  const clients = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Clientes descargados...');
    }, 2000);
  });

  const tf = true;

  if (!tf) {
    const respuesta = await clients;
    return respuesta;
  } else {
    await Promise.reject('Ocurrió un error');
  }

}

loadClients()
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Ejemplo con una api real
async function getComments() {

  // Obteniendo la respuesta
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');

  // Retornando la data
  return response.json();
}

getComments().then(data => console.log(data));
