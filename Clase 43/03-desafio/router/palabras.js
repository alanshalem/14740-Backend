const express = require("express");
const ControladorPalabras = require("../controlador/palabras.js");

const router = express.Router();

class RouterPalabras {
  constructor() {
    this.controladorPalabras = new ControladorPalabras();
  }

  start() {
    router.get("/", this.controladorPalabras.obtenerPalabras);
    router.post("/", this.controladorPalabras.guardarPalabra);

    return router;
  }
}

module.exports = RouterPalabras;
