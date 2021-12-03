const express = require('express');
const clase37 = require('clase37npm');

const app = express();
const PORT = 8080;

app.listen(
  PORT,
  () => console.log(`Server listen on port ${PORT}`),
);

// !!!!!!!!!!!!

app.get(
  '/suma',
  (request, response) => response.status(
    200,
  ).json(
    clase37.suma(
      +request.query.operando1,
      +request.query.operando2,
    ),
  ),
);

app.get(
  '/resta',
  (request, response) => response.status(
    200,
  ).json(
    clase37.resta(
      +request.query.operando1,
      +request.query.operando2,
    ),
  ),
);

app.get(
  '/multiplicacion',
  (request, response) => response.status(
    200,
  ).json(
    clase37.multiplicacion(
      +request.query.operando1,
      +request.query.operando2,
    ),
  ),
);

app.get(
  '/division',
  (request, response) => response.status(
    200,
  ).json(
    clase37.division(
      +request.query.operando1,
      +request.query.operando2,
    ),
  ),
);
