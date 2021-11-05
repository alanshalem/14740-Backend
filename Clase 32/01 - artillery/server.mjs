// npm i artillery@1.7.9

import express from 'express';
import os from 'os';
import cluster from 'cluster';
import isPrime from './isPrime.mjs';

const CLUSTER_MODE = process.argv[3] === 'CLUSTER';

if (CLUSTER_MODE && cluster.isMaster) {
  for (let index = 0; index < os.cpus().length; index += 1) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = +process.argv[2] || 8080;

  app.listen(
    PORT,
    () => console.log(`Server listen on port ${PORT}`),
  );

  app.get(
    '/',
    (request, response) => {
      const primes = [];
      const max = Number(request.query.max) || 1000;

      for (let index = 0; index < max; index += 1) {
        if (isPrime(index)) {
          primes.push(index);
        }
      }

      response.json(primes);
    },
  );
}
