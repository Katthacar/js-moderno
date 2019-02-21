// Promises
const esperando = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Se ejecutó');
  }, 5000);
});

esperando.then((msj) => {
  console.log(msj);
});

// Otro ejemplo con ejecución de reject
const applyDescuento = new Promise((resolve, reject) => {
  const descuento = false;
  setTimeout(() => {
    if (descuento) {
      resolve('Descuento aplicado');
    } else {
      reject('No se pudo aplicar descuento');
    }
  }, 5000);
});
applyDescuento
  .then((msj) => {
    console.info(msj);
  })
  .catch((err) => {
    console.error(err);
  })
