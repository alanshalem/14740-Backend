const express = require('express');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  const cpus = os.cpus().length;
  console.log(`Cantidad de CPUs: ${cpus}`);

  for (let index = 0; index < cpus; index += 1) {
    cluster.fork();
  }

  cluster.on(
    'exit',
    (worker) => {
      console.log(`Worker ${worker.process.pid} died`);

      cluster.fork();
    },
  );
} else {
  console.log(`Worker ${process.pid} is running`);

  const app = express();
  const PORT = process.argv[2] || 8080;

  app.listen(
    PORT,
    () => console.log(`PORT: ${PORT} | PID: ${process.pid}`),
  );

  app.get(
    '/',
    (_request, response) => response.send(`Servidor express en ${PORT} - PID ${process.pid} - ${new Date().toLocaleString('es-AR')}`),
  );
}

// ps xf | grep '[p]rueba.js'
