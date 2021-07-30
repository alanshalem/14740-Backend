function creadora(a) {
  function interna() {
    return ++a;
  }

  return interna;
}

const foo1 = creadora(20);
const foo2 = creadora(30);

console.log(foo1());
console.log(foo1());
console.log(foo1());

console.log(foo2());
console.log(foo2());
console.log(foo2());

// Simulacion private

// function creadora() {
//   let a = 3;

//   function interna() {
//     return ++a;
//   }

//   return interna;
// }

// const foo3 = creadora();
// console.log(foo3());
// console.log(foo3());
