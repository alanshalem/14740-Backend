// eslint-disable-next-line no-undef
const socket = io();

socket.on("mensaje", (data) => {
  alert(data);
});

socket.on("mensajes", (data) => {
  alert(data);
});

socket.emit("notificacion", "mensaje recibido");
