const operacion = (operando1, operando2, funcionOperacion) =>
  funcionOperacion(operando1, operando2);

const suma = (operando1, operando2) => operando1 + operando2;
const resta = (operando1, operando2) => operando1 - operando2;
const multiplicacion = (operando1, operando2) => operando1 * operando2;
const division = (operando1, operando2) => operando1 / operando2;
const modulo = (operando1, operando2) => operando1 % operando2;

console.log(operacion(2, 5, suma));
console.log(operacion(2, 5, resta));
console.log(operacion(2, 5, multiplicacion));
console.log(operacion(2, 5, division));
console.log(operacion(2, 5, modulo));
