// function* generadorIds() {
//   var indice = 0;
//   while (true) {
//     yield indice++;
//   }
// }

// const gen = generadorIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

/////////////////////

function crearIterador(array) {
  let siguienteIndice = 0;

  return {
    next: () => {
      return siguienteIndice < array.length
        ? { value: array[siguienteIndice++], done: false }
        : { done: true };
    },
  };
}

const array = ["yo", "ya"];

const iterador = crearIterador(array);
let result = iterador.next();
console.log(result.value);
console.log(result.done);

result = iterador.next();
console.log(result.value);
console.log(result.done);

result = iterador.next();
console.log(result.value);
console.log(result.done);
