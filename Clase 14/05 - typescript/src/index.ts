import * as operaciones from "./lib/operaciones";

const mensaje: string = "Hola Typescript!";
console.log(mensaje);

let number1: number = 10,
  number2: number = 4;

console.log(
  `La suma de ${number1} más ${number2} es ${operaciones.sumar(
    number1,
    number2
  )}`
);
console.log(
  `La resta de ${number1} más ${number2} es ${operaciones.restar(
    number1,
    number2
  )}`
);
console.log(
  `La multiplicación de ${number1} más ${number2} es ${operaciones.mult(
    number1,
    number2
  )}`
);
console.log(
  `La resta de ${number1} más ${number2} es ${operaciones.div(
    number1,
    number2
  )}`
);
