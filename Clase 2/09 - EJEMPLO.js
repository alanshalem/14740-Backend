async function example(objeto) {
  await waitAndPrint(Object.entries(objeto));
}

function waitAndPrint(object) {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(console.log(object));
    }, 2000);
  });
}

const objeto = {
  clave1: "valor1",
  clave2: "valor2",
  clave3: "valor3",
  clave4: "valor4",
  clave5: "valor5",
};

example(objeto);

console.log("Fin");
