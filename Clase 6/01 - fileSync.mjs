import fs from "fs";

//////////////

const data = fs.readFileSync("./pruebaSync.txt", "utf-8");

console.log(data);

// ////////////////

// fs.writeFileSync("./pruebaSync.txt", "Probando un write");

// ////////////////

// fs.appendFileSync("./pruebaSync.txt", "\nProbando un append");

// ////////////////

// fs.unlinkSync("./pruebaSync.txt");

// ////////////////

// try {
//   const data = fs.readFileSync("./123456789.txt", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log(`Hubo un error:\n    ${error.message}`);
// }