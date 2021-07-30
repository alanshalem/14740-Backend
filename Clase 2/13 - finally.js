// try {
//   console.log("Haciendo algo");
//   throw new Error("Explotó");
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Fin");
// }

// PROMESAS

const promesa = new Promise((resolve) => {
  console.log("Haciendo algo");
  resolve(new Date().getSeconds());
  reject("Esto dio un error");
});

promesa
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Fin");
  });
