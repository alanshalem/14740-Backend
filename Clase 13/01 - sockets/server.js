const express = require("express");
const http = require("http");
const io = require("socket.io");

const app = express();
const server = http.Server(app);
const ioServer = io(server);

/////////////////

server.listen(8080, () => {
  console.log("Servidor iniciado en http://localhost:8080");
});

/////////////////

app.use(express.static("public"));

/////////////////

const messages = [
  {
    author: "Juan",
    text: "¡Hola! ¿Que tal?",
  },
  {
    author: "Pedro",
    text: "¡Muy bien! ¿Y vos?",
  },
  {
    author: "Ana",
    text: "¡Genial!",
  },
];

ioServer.on("connection", (socket) => {
  console.log("Un cliente se ha conectado");
  socket.emit("messages", messages);

  socket.on("new-message", (data) => {
    messages.push(data);
    ioServer.sockets.emit("messages", messages);
  });
});
