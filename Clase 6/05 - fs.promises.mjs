import fs from "fs";

// ///////////////


(() => {
  fs.promises
    .readFile("./pruebaPromises.txt", "utf-8")
    .then((contenido) => {
      console.log("Promises!", contenido);
    })
    .catch((error) => {
      console.log("Hubo un error!", error);
    });
})();

// ///////////////

// (async () => {
//   try {
//     const contenido = await fs.promises.readFile(
//       "./pruebaPromises.txt",
//       "utf-8"
//     );

//     console.log("Async!", contenido);
//   } catch (error) {
//     console.log("Hubo un error!", error);
//   }
// })();

// ///////////////

// (async () => {
//   try {
//     await fs.promises.writeFile(
//       "./pruebaPromises.txt",
//       "Probando Write Async!"
//     );

//     console.log("Archivo guardado");
//   } catch (error) {
//     console.log("Hubo un error!", error);
//   }
// })();

// ///////////////

// (async () => {
//   try {
//     await fs.promises.appendFile(
//       "./pruebaPromises.txt",
//       "\nProbando Append Async!"
//     );

//     console.log("Archivo actualizado");
//   } catch (error) {
//     console.log("Hubo un error!", error);
//   }
// })();

// ///////////////

// (async () => {
//   try {
//     await fs.promises.rename(
//       "./pruebaPromises.txt",
//       "./pruebaPromisesRenombrado.txt"
//     );

//     console.log("Archivo actualizado");
//   } catch (error) {
//     console.log("Hubo un error!", error);
//   }
// })();
