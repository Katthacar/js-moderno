// Window - Object
let alto, ancho;

alto = window.outerHeight; // Alto navegador
ancho = window.outerWidth; // Ancho navegador
console.log(`Alto Navegador: ${alto}, Ancho Navegador: ${ancho}`);

alto = window.innerHeight; // Alto ventana
ancho = window.innerWidth;  // Ancho ventana
console.log(`Alto Ventana: ${alto}, Ancho Ventana: ${ancho}`);

// Ubicación
let ubicacion = window.location;
ubicacion = window.location.port;
ubicacion = window.location.hostname;
ubicacion = window.location.search;
ubicacion = window.navigator;
ubicacion = window.navigator.appName;
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.platform;
ubicacion = window.navigator.userAgent;
ubicacion = window.navigator.vendor;
ubicacion = window.navigator.plugins;
console.log(ubicacion);

// History navigation
window.history.go(-1); // Navega veces atrás según el parámetro en go()
