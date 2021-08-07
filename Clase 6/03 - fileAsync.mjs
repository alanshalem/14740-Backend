import fs from "fs";

// //////////////

fs.readFile("./pruebaAsync.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(`Hubo un error:\n    ${error.message}`);
  } else {
    console.log(data);
  }
});

// ////////////////

// fs.writeFile("./pruebaAsync.txt", "Probando Write ASYNC!", (error) => {
//   if (error) {
//     console.log(`Hubo un error:\n    ${error.message}`);
//   } else {
//     console.log("Archivo grabado!");
//   }
// });

// ////////////////

// fs.appendFile("./pruebaAsync.txt", "Probando Append ASYNC!", (error) => {
//   if (error) {
//     console.log(`Hubo un error:\n    ${error.message}`);
//   } else {
//     console.log("Archivo actualizado!");
//   }
// });

// ////////////////

// fs.unlink("./pruebaAsync.txt", (error) => {
//   if (error) {
//     console.log(`Hubo un error:\n    ${error.message}`);
//   } else {
//     console.log("Archivo eliminado!");
//   }
// });

////////////////

// fs.mkdir("./Directorio", (error) => {
//   if (error) {
//     console.log(`Hubo un error:\n    ${error.message}`);
//   } else {
//     console.log("Directorio creado!");
//   }
// });

////////////////

// fs.readdir(".", (error, contenido) => {
//   if (error) {
//     console.log(`Hubo un error:\n    ${error.message}`);
//   } else {
//     console.log(contenido);
//   }
// });
