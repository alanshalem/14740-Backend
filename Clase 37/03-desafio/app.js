const express = require('express');
const rutasCalculadora = require('./rutas/rutasCalculadora');

const app = express();
const PORT = 8080;

app.listen(
  PORT,
  () => console.log(`Server listen on port ${PORT}`),
);

app.use(
  '/calculadora',
  rutasCalculadora,
);

// !!!!!!!!!!!!

app.get(
  '/',
  (_request, response) => response.send('Hola Yarn!'),
);
