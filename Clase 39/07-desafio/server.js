const express = require("express");

const app = express();

// #region

app.use(express.json());

// #endregion

const PORT = +process.argv[2] || 8080;

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));

// #region

const numeros = [];

app.post("/ingreso", (request, response) => {
  numeros.push(request.body.numero);

  return response.status(200).send("OK");
});

app.get("/egreso", (_request, response) => response.status(200).send(numeros));

// #endregion
