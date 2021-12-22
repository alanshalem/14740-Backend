const ApiPalabras = require("../api/palabras.js");

class ControladorPalabras {
  constructor() {
    this.apiPalabras = new ApiPalabras();
  }

  obtenerPalabras = async (_request, response) => {
    try {
      const palabras = await this.apiPalabras.obtenerPalabras();

      return response.send(palabras);
    } catch (error) {
      return console.log("error obtenerPalabras", error);
    }
  };

  guardarPalabra = async (request, response) => {
    try {
      const palabra = request.body;

      const palabraGuardada = await this.apiPalabras.guardarPalabra(palabra);

      return response.json(palabraGuardada);
    } catch (error) {
      return console.log("error obtenerPalabras", error);
    }
  };
}

module.exports = ControladorPalabras;
