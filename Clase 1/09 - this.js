console.log(this);

// GLOBAL

function foo(contexto) {
  console.log("---" + contexto + "---");
  console.log(this);
}

foo("Normal");

// FUNCION

new foo("New");

// OBJETO

const fooObj = {
  clave: foo,
};

fooObj.clave("Objeto");
