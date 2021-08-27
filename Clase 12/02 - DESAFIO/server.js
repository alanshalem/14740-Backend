const express = require("express");
const http = require("http");
const io = require("socket.io");

const app = express();
const server = http.Server(app);
const ioServer = io(server);

server.listen(3000, () => {
  console.log("Server ON");
});

///////////////////

app.use(express.static("./public"));

///////////////////

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

///////////////////

const mensajes = [];
ioServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!");
  ioServer.sockets.emit("inputAll", mensajes);

  socket.on("input", (data) => {
    mensajes.push(data);

    ioServer.sockets.emit("inputAll", mensajes);
  });
});
