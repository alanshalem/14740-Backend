const express = require('express');
const cluster = require('cluster');
const { fork } = require('child_process');
const cpus = require('os').cpus().length;

if (process.argv[3] === 'CLUSTER') {
  if (cluster.isMaster) {
    for (let index = 0; index < cpus; index += 1) {
      cluster.fork();
    }

    cluster.on(
      'exit',
      (worker) => {
        console.log(`Worker ${worker.process.pid} died`);
      },
    );
  } else {
    const app = express();

    // app.use(express.static(`${__dirname}/../04 - DESAFIO/public`))

    const PORT = +process.argv[2] || 8080;

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
  }
}

if (process.argv[3] === 'FORK') {
  const child = fork('./server.js');

  child.send({
    port: process.argv[2],
  });
}
