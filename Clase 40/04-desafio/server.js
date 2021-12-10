const express = require("express");
const primeraConexion = require("./singleton").getInstance();

const app = express();

// #region [ init ]

const PORT = +process.argv[2] || 8080;

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));

// #endregion

// #region [ routes ]

app.get("/datos", (_request, response) =>
  response.status(200).send(primeraConexion.obtenerHora())
);

// #endregion
