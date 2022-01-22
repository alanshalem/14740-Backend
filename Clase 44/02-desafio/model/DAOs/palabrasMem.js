/* eslint-disable no-underscore-dangle */
const palabraDTO = require("../DTOs/palabras.js");
const PalabrasBaseDAO = require("./palabrasBaseDAO.js");

class PalabrasMemDAO extends PalabrasBaseDAO {
  constructor() {
    super();
    this.palabras = [];
  }

  obtenerPalabras = async () => {
    try {
      return this.palabras;
    } catch (error) {
      console.log("error en obtenerPalabras", error);

      return [];
    }
  };

  guardarPalabra = async (palabra) => {
    try {
      const palabraGuardada = palabraDTO(
        palabra,
        this.getNextId(this.palabras),
        Date.now()
      );

      this.palabras.push(palabraGuardada);

      return palabraGuardada;
    } catch (error) {
      console.log("error en guardarPalabra:", error);

      return {};
    }
  };
}

module.exports = PalabrasMemDAO;
