import express from "express";

const ROOT_DIR = "/workspaces/Coderhouse/Backend/Clase 10/02 - DESAFIO";
const port = 8080;
const app = express();

const server = app.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});

server.on("error", () => {
  console.log("Error iniciando el server");
});

///////////

app.use(express.static(`${ROOT_DIR}/public`));
