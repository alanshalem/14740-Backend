const express = require('express');

const app = express();
const PORT = process.argv[2] || 8080;

app.listen(
  PORT,
  () => console.log(`PORT: ${PORT} | PID: ${process.pid}`),
);

// #region endpoints

app.get(
  '/',
  (_request, response) => response.send(`Servidor express en ${PORT} - PID ${process.pid} - ${new Date().toLocaleString('es-AR')}`),
);

// #endregion

// ps xf | grep '[p]rueba.js'
