// eslint-disable-next-line no-undef
const socket = io.connect();

const theField = document.getElementById("playingField");
const context = theField.getContext("2d");
theField.addEventListener("touchstart", onTouchStart);
theField.addEventListener("touchmove", onTouchMove);

class Coords {
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

const coords = new Coords(0, 0, 0, 0, 0);

window.addEventListener("load", () => {
  socket.emit("refresh", "rectList");

  document.getElementById("blackCheck").addEventListener("change", () => {
    coords.r = 0;
    coords.g = 0;
    coords.b = 0;
  });

  document.getElementById("blueCheck").addEventListener("change", () => {
    coords.r = 0;
    coords.g = 0;
    coords.b = 255;
  });

  document.getElementById("redCheck").addEventListener("change", () => {
    coords.r = 255;
    coords.g = 0;
    coords.b = 0;
  });

  document.getElementById("greenCheck").addEventListener("change", () => {
    coords.r = 0;
    coords.g = 255;
    coords.b = 0;
  });
});

socket.on("rect", (data) => {
  document.getElementById("information").innerHTML = `x: ${parseInt(
    data.x
  )} - y: ${parseInt(data.y)} @ R: ${parseInt(data.r)} - G: ${parseInt(
    data.g
  )} - B: ${parseInt(data.b)}`;

  context.fillStyle = `rgb(${data.r}, ${data.g}, ${data.b})`;
  context.fillRect(data.x - data.w / 2, data.y - data.h / 2, data.w, data.h);
});

socket.on("rectListData", (data) => {
  document.getElementById("information").innerHTML =
    "Received UpTo Date Data from server";

  context.clearRect(0, 0, 1280, 768);

  let entry;
  for (const key in data) {
    entry = data[key];
    if (entry != null) {
      context.fillStyle = `rgb(${entry.r}, ${entry.g}, ${entry.b})`;
      context.fillRect(
        entry.x - entry.w / 2,
        entry.y - entry.h / 2,
        entry.w,
        entry.h
      );
    }
  }
});

socket.on("address", (data) => {
  document.getElementById("address").innerHTML = data;
});

let mouseDown = false;

// eslint-disable-next-line no-unused-vars
function onMouseDown(event) {
  mouseDown = true;
  drawAndRefreshInformation(event);
}

// eslint-disable-next-line no-unused-vars
function onMouseMove(event) {
  if (mouseDown) {
    drawAndRefreshInformation(event);
  }
}

// eslint-disable-next-line no-unused-vars
function onMouseUp(event) {
  mouseDown = false;
}

// eslint-disable-next-line no-unused-vars
function onMouseLeave(event) {
  mouseDown = false;
}

function drawAndRefreshInformation(event) {
  const box = theField.getBoundingClientRect();
  const X = event.clientX - box.left;
  const Y = event.clientY - box.top;
  coords.x = X;
  coords.y = Y;
  const R = coords.r;
  const G = coords.g;
  const B = coords.b;

  socket.emit("rect", coords);

  document.getElementById("information").innerHTML = `x: ${parseInt(
    X
  )} - y: ${parseInt(Y)} @ R: ${parseInt(R)} - G: ${parseInt(
    G
  )} - B: ${parseInt(B)}`;
}

function onTouchStart(event) {
  drawAndRefreshInformationTouch(event);
}

function onTouchMove(event) {
  drawAndRefreshInformationTouch(event)
}

function drawAndRefreshInformationTouch(event) {
  event.preventDefault();

  if (event.touches?.length >= 1) {
    const touch = event.touches[0];
    const box = theField.getBoundingClientRect();
    coords.x = touch.pageX - box.left;
    coords.y = touch.pageY - box.top;

    socket.emit("rect", coords);
  }
}