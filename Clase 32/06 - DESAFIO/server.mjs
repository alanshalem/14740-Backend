import express from 'express';
import os from 'os';
import cluster from 'cluster';

const CLUSTER_MODE = process.argv[3] === 'CLUSTER';

if (CLUSTER_MODE && cluster.isPrimary) {
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
    '/randoms-nodebug',
    (_request, response) => {
      const randoms = [];

      for (let index = 0; index < 10_000; index += 1) {
        randoms.push(Math.floor(Math.random() * 9));
      }

      return response.json({ randoms });
    },
  );

  app.get(
    '/randoms-debug',
    (_request, response) => {
      const randoms = [];

      for (let index = 0; index < 10_000; index += 1) {
        randoms.push(Math.floor(Math.random() * 9));
      }

      console.log(randoms);

      return response.json({ randoms });
    },
  );
}
