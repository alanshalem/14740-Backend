// FUNCION

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Persona.prototype.saludo = function () {
  console.log("Hola, soy " + this.nombre);
};

Persona.edad = 15;

const persona = new Persona("Juan", "Perez");
persona.saludo();
console.log(persona.edad);
console.log(Persona.edad);

// New manual

let objeto = {};
Persona.call(objeto, "Juan", "Perez");
const persona2 = objeto;

console.log(persona2.edad);
console.log(Persona.edad);

// CLASS

class Perro {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludo() {
    console.log("Hola! Soy " + this.nombre);
  }

  static raza = "Linda";
}

const perro = new Perro("Jose", 2);
perro.saludo();
console.log(perro.raza);
console.log(Perro.raza);
