const http = require("http");

const server = http.createServer((_, response) => {
  const hour = new Date().getHours() - 3;
  if (hour >= 6 && hour <= 12) {
    response.end("Buenos dias!");
  }

  if (hour >= 13 && hour <= 19) {
    response.end("Buenas tardes!");
  }

  if (hour >= 20 && hour <= 5) {
    response.end("Buenas noches!");
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});
