const express = require('express');

const app = express();
const PORT = +process.argv[2] || 8080;

app.get(
  '/datos',
  (_request, response) => {
    console.log(`PORT: ${PORT} --> FYH: ${Date.now()}`);

    return response
      .status(200)
      .send(`Servidor Express <span style="color: blueviolet;">(Nginx)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`);
  },
);

app.listen(
  PORT,
  (error) => {
    if (!error) {
      console.log(`Servidor Express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`);
    }
  },
);
