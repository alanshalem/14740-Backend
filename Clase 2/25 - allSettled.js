function generaPromesa(tiempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().getSeconds()); // No se ejecuta el resolve cuando alguna falla
    }, tiempo * 1000);
  });
}

const promesas = [
  generaPromesa(1),
  generaPromesa(2),
  Promise.reject("Falló"),
  generaPromesa(4),
  generaPromesa(5),
  generaPromesa(6),
];

// Promise.allSettled(promesas).then((results) => {
//   console.log(results);
// });

Promise.all(promesas)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
