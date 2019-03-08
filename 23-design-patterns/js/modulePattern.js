/**
 * MODULE PATTERN
 */
// Funciones IIFE (Immediately Invoked Function Expressions - Expresiones de función invocadas inmediatamente)
const comprarBoleto = (function () {

  // Private
  let evento = 'Conferencia JS';
  const getTicket = () => {
    const el = document.createElement('h3');
    el.textContent = `Comprando Tickets para el evento: ${evento}`;
    document.getElementById('app').appendChild(el);
  }

  // Public
  return {
    mostrarBoleto: function () {
      console.log(`Accediendo a variable ${evento}`);
      getTicket();
    }
  };
})();

// Lanza error ya que la función IIFE encapsula la variable evento
// console.log(evento); 

// Esto si lo ejecuta ya que está entre el bloque de retorno
comprarBoleto.mostrarBoleto();
