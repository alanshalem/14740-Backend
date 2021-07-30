function generaPromesa(tiempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().getSeconds());
      // reject("Esto dio un error");
    }, tiempo * 1000);
  });
}

async function foo() {
  try {
    console.log(await generaPromesa(0));

    // console.log("Ejecutando 1 y 2 en secuencia");
    // console.log(await generaPromesa(2));
    // console.log(await generaPromesa(2));
    // console.log("Ejecutando 1 y 2 en paralelo");
    // const a = generaPromesa(2);
    // const b = generaPromesa(2);
    // console.log((await a) + " " + (await b));
  } catch (error) {
    console.log(error);
  }
}

console.log("Inicio");
foo();
console.log("Fin");
