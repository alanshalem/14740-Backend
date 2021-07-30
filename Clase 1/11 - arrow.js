// Varios parametros y lineas

const arrow = (a, b) => {
  const c = a;
  const d = b;
  return c + d;
};

console.log(arrow(2, 3));

// Sin parametros, una linea

const arrow2 = () => "hola";
console.log(arrow2());

// Retornar objeto

const arrow3 = () => ({
  clave: "valor",
  clave2: "valor2",
});

// THIS

var edad = 10;

function foo() {
  this.edad = 20;

  setTimeout(() => {
    console.log(this.edad);
  }, 100);

  setTimeout(function () {
    console.log(this.edad);
  }, 100);
}

foo();
