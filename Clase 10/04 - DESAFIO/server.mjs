import fs from "fs";
import express from "express";
import moment from "moment";

const port = 8080;
const app = express();

const server = app.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});

server.on("error", (error) => console.log(error));

//////////////////////

const ENGINE_NAME = "cte";
app.set("views", ["./cte1", "./cte2"]);
app.set("view engine", ENGINE_NAME);

app.engine(ENGINE_NAME, (filePath, options, callback) => {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      return callback(new Error(error));
    }

    const rendered = content
      .toString()
      .replace("^^titulo$$", options.titulo)
      .replace("^^mensaje$$", options.mensaje)
      .replace("^^autor$$", options.autor)
      .replace("^^version$$", options.version)
      .replace("^^nombre$$", options.nombre)
      .replace("^^apellido$$", options.apellido)
      .replace("^^fecha$$", options.fecha)
      .replace("^^hora$$", options.hora);

    return callback(null, rendered);
  });
});

//////////////////////

app.get("/cte1", (request, response) => {
  response.render("plantilla1.cte", {
    titulo: "Hola mundo!",
    mensaje: "GET CTE1",
    autor: "Yo",
    version: 1,
  });
});

app.get("/cte2", (request, response) => {
  const fecha = moment();
  response.render("plantilla2.cte", {
    nombre: "Juan",
    apellido: "Gonzales",
    fecha: fecha.format("DD/MM/YYYY"),
    hora: fecha.format("hh:mm"),
  });
});
