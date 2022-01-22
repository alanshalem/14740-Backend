/* eslint-disable class-methods-use-this */
const PalabrasFactoryDAO = require("../model/DAOs/palabrasFactory.js");
const Palabras = require("../model/models/palabras.js");

class ApiPalabras {
  constructor() {
    this.palabrasDAO = PalabrasFactoryDAO.get();
  }

  async obtenerPalabras() {
    const palabras = await this.palabrasDAO.obtenerPalabras();

    return palabras.map((element) => element.palabra).join(" ");
  }

  async guardarPalabra(palabra) {
    this.asegurarPalabraValida(palabra, true);

    return this.palabrasDAO.guardarPalabra(palabra);
  }

  asegurarPalabraValida(palabra, requerido) {
    try {
      Palabras.validar(palabra, requerido);
    } catch (error) {
      throw new Error(
        `la Palabra posee un formato json invalido o faltan datos: ${error.details[0].message}`
      );
    }
  }
}

module.exports = ApiPalabras;
