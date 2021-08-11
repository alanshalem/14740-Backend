const express = require("express");

const app = express();
const port = 8080;
const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

server.on("error", (error) => {
  console.error(error);
});

app.get("/", (_, response) => {
  response.send("<h1 style='color: blue'>Bienvendios al servidor express</h1>");
});

let visitas = 0;
app.get("/visitas", (_, response) => {
  response.send(`La cantidad de visitas es ${++visitas}`);
});

app.get("/fyh", (_, response) => {
  response.json({
    fyh: new Date().toLocaleString("es-AR", "DD-M-YYYY HH:MM:SS"),
  });
});
