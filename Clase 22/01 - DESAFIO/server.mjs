import express from "express";

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

server.on("error", (error) => {
  console.error(error);
});

//////////////

const nombres = ["Luis", "Lucia", "Juan", "Augusto", "Ana"];
const apellidos = ["Pieres", "Cacurri", "Bezzola", "Alberca", "Mei"];
const colores = ["rojo", "verde", "azul", "amarillo", "magenta"];

app.get("/test", (_request, response) => {
  const array = [];

  for (let index = 0; index < 10; index++) {
    array.push({
      nombre: nombres[getRandomNumber(nombres)],
      apellido: apellidos[getRandomNumber(apellidos)],
      color: colores[getRandomNumber(colores)],
    });
  }

  response.json(array);
});

const getRandomNumber = (array) =>
  Math.floor(Math.random() * (array.length - 1));
