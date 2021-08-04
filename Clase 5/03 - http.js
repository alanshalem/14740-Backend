const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Hola mundo!");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});
