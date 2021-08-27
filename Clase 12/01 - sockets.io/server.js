const express = require("express");
const http = require("http");
const io = require("socket.io");

const app = express();
const server = http.Server(app);
const ioServer = io(server);

server.listen(3000, () => {
  console.log("Server ON");
});

//////////////////

app.use(express.static("./public"));

//////////////////

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

//////////////////

ioServer.on("connection", (socket) => {
  console.log("Usuario conectado");

  socket.emit("mensaje", "Mensaje desde el servidor");
  socket.on("notificacion", (data) => {
    console.log(data);
  });

  ioServer.sockets.emit("mensajes", "Hola a todos");
});
