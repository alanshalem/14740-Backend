const express = require("express");
const http = require("http");
const io = require("socket.io");
const paint = require("./paint");

const app = express();
const server = http.Server(app);
const ioServer = io(server);

////////////////////

app.use(express.static("public"));

////////////////////

const PORT = 8080;
server.listen(PORT, (error) => {
  if (error) {
    throw Error(`Errror iniciando el servidor: ${error}`);
  }

  console.log(`Servidor http iniciado en el puerto ${PORT}`);
});

////////////////////

app.get("/reset", (request, response) => {
  paint.initMap();
  ioServer.sockets.emit("rectListData", paint.mapToArray());
  
  response.redirect("/");
});

////////////////////

ioServer.sockets.on("connection", (socket) => {
  const thisClientIP = socket.handshake.address;
  socket.emit("address", thisClientIP);

  socket.on("refresh", (data) => {
    if (data === "rectList") {
      socket.emit("rectListData", paint.mapToArray());
    }
  });

  const SIZE = 4;
  socket.on("rect", (data) => {
    const color = {
      r: data.r,
      g: data.g,
      b: data.b,
    };

    data.x = Math.trunc(data.x / SIZE) * SIZE;
    data.y = Math.trunc(data.y / SIZE) * SIZE;
    const shape = paint.Shape(
      data.x,
      data.y,
      SIZE,
      SIZE,
      color.r,
      color.g,
      color.b
    );

    paint.rectangleMap[data.x][data.y] = shape;

    ioServer.sockets.emit("rect", shape);
  });
});
