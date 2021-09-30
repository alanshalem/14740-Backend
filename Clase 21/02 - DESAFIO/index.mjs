import mongoose from "mongoose";
import { usuarios } from "./models/usuarios.mjs";

// [
//   { nombre: "Lucas", apellido: "Blanco", dni: "30355874" },
//   { nombre: "María", apellido: "García", dni: "29575148" },
//   { nombre: "Tomas", apellido: "Sierra", dni: "38654790" },
//   { nombre: "Carlos", apellido: "Fernández", dni: "26935670" },
// ]

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce");

    console.log("Base de datos conectada");

    const find = await usuarios.find();
    console.log("FIND", find);

    const insert = await usuarios.insertMany({
      nombre: "Federico",
      apellido: "Perez",
      dni: 320118321,
    });

    console.log("INSERT", insert);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
    console.log("Base de datos desconectada");
  }
})();
