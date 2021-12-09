const express = require("express");

const app = express();

// #region

app.use(express.json());

// #endregion

// #region

const numeros = [];

app.post("/ingreso", (request, response) => {
  numeros.push(request.body.numero);

  return response.status(200).send("OK");
});

app.get("/egreso", (_request, response) => response.status(200).send(numeros));

// #endregion

module.exports = {
  app,
};
