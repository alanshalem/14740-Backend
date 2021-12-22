const express = require("express");
const ControladorNoticias = require("../controlador/noticias.js");

const router = express.Router();

class RouterNoticias {
  constructor() {
    this.controladorNoticias = new ControladorNoticias();
  }

  start() {
    router.get("/:id?", this.controladorNoticias.obtenerNoticias);
    router.post("/", this.controladorNoticias.guardarNoticia);
    router.put("/:id", this.controladorNoticias.actualizarNoticia);
    router.delete("/:id", this.controladorNoticias.borrarNoticia);

    return router;
  }
}

module.exports = RouterNoticias;
