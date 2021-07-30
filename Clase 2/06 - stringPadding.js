const nombre = "Juan";
console.log(nombre.padStart(10));
console.log(nombre.padStart(10, "."));
console.log(nombre.padEnd(10, "."));
console.log(nombre.padEnd(2, "."));

const numeroTarjeta = "1234 5678 1234 5678";
console.log(numeroTarjeta.slice(-4).padStart(numeroTarjeta.length, "*"));
