import express from "express";
import handlebars from "express-handlebars";

const __dirname = "/workspaces/Coderhouse/Backend/Clase 10/05 - handlebars";
const PORT = 8080;
const app = express();

app.listen(PORT, (error) => {
  if (error) {
    throw new Error("Error en servidor ${error}");
  }

  console.log(`Servidor iniciado en ${PORT}`);
});

const ENGINE_NAME = "hbs";

app.engine(
  ENGINE_NAME,
  handlebars({
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    defaultLayout: "index.hbs",
  })
);

app.set("view engine", ENGINE_NAME);
app.set("views", "./views");

///////////////////////

app.use(express.static("public"));

///////////////////////

app.get("/", (require, response) => {
  response.render("main.hbs", {
    listExists: false,
    suggestedChamps: [
      {
        name: "Katarina",
        lane: "midlaner",
      },
      {
        name: "Jayce",
        lane: "toplaner",
      },
      {
        name: "Heimerdinger",
        lane: "toplaner",
      },
      {
        name: "Jayce",
        lane: "midlaner",
      },
      {
        name: "Azir",
        lane: "midlaner",
      },
    ],
  });
});
