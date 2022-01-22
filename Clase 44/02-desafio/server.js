const express = require("express");
const cors = require("cors");
const config = require("./config.js");
const RouterPalabras = require("./router/palabras.js");

const app = express();

if (config.NODE_ENV === "development") {
  app.use(cors());
}

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const routerPalabras = new RouterPalabras();

app.use("/palabras", routerPalabras.start());

const PORT = config.PORT || 8000;
app.listen(PORT, () =>
  console.log(
    `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV})`
  )
);
