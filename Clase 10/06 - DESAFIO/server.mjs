import express from "express";
import handlebars from "express-handlebars";

const __dirname = "/workspaces/Coderhouse/Backend/Clase 10/06 - DESAFIO";
const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});

server.on("error", (error) => {
  console.log(error);
});

const ENGINE_NAME = "hbs";

app.engine(
  ENGINE_NAME,
  handlebars({
    extname: ".hbs",
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: "index.hbs",
  })
);

app.set("views", "./views");
app.set("view engine", ENGINE_NAME);

////////////////

app.get("/", (request, response) => {
  response.render("main.hbs", {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    email: "juan@perez.com",
    telefono: 123456,
  });
});
