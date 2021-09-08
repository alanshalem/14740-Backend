import express from "express";
import { Persona } from "./lib/classes";
const operaciones = require("./lib/functions.js");

///////////////

const app = express();

///////////////

const PORT: number = 8080;
app.listen(PORT, () => {
  console.log(`Servir express Typescript/Webpack en puerto ${PORT}`);
});

///////////////

const persona: Persona = new Persona("Eliana", "Lopez");
app.get("/", (request, response) => {
  response.send({
    timeES6: operaciones.getTime(),
    fullNameTS: persona.getFullName(),
  });
});

