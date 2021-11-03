const cluster = require('cluster');
const http = require('http');
const cpus = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let index = 0; index < cpus; index += 1) {
    cluster.fork();
  }

  cluster.on(
    'exit',
    (worker) => console.log(`Worker ${worker.process.pid} died`),
  );
} else {
  const server = http.createServer((_request, response) => response.writeHead(200).end('Hello world\n'));

  server.listen(8080);

  console.log(`Worker ${process.pid} is running`);
}
