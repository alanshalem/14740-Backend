const ApiPalabras = require("../api/palabras.js");

class ControladorPalabras {
  constructor() {
    this.apiPalabras = new ApiPalabras();
  }

  obtenerPalabras = async () => {
    try {
      const palabras = await this.apiPalabras.obtenerPalabras();

      return {
        palabras,
      };
    } catch (error) {
      return console.log("error obtenerPalabras", error);
    }
  };

  guardarPalabra = async ({ palabra }) => {
    try {
      return this.apiPalabras.guardarPalabra({
        palabra,
      });
    } catch (error) {
      return console.log("error obtenerPalabras", error);
    }
  };
}

module.exports = ControladorPalabras;
