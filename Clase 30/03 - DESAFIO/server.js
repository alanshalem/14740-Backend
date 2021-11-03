const express = require('express');

process.on(
  'message',
  (data) => {
    const app = express();
    const PORT = data.port || 8080;

    // app.use(express.static(`${__dirname}/../04 - DESAFIO/public`));

    app.get(
      '/datos',
      (_request, response) => {
        console.log(`PORT: ${PORT} --> FYH: ${Date.now()}`);

        return response.send(`Server en ${PORT} - ${process.pid} - ${new Date().toLocaleString()}`);
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
  },
);
