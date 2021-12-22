const ApiNoticias = require("../api/noticias.js");

class ControladorNoticias {
  constructor() {
    this.apiNoticias = new ApiNoticias();
  }

  obtenerNoticias = async (request, response) => {
    try {
      const { id } = request.params;

      const noticias = await this.apiNoticias.obtenerNoticias(id);

      return response.status(200).send(noticias);
    } catch (error) {
      return console.log("error obtenerNoticias", error);
    }
  };

  guardarNoticia = async (request, response) => {
    try {
      const noticia = request.body;
      const noticiaGuardada = await this.apiNoticias.guardarNoticia(noticia);

      return response.status(201).json(noticiaGuardada);
    } catch (error) {
      return console.log("error obtenerNoticias", error);
    }
  };

  actualizarNoticia = async (request, response) => {
    try {
      const noticia = request.body;
      const { id } = request.params;
      const noticiaActualizada = await this.apiNoticias.actualizarNoticia(
        id,
        noticia
      );

      return response.status(200).json(noticiaActualizada);
    } catch (error) {
      return console.log("error obtenerNoticias", error);
    }
  };

  borrarNoticia = async (request, response) => {
    try {
      const { id } = request.params;
      const noticiaBorrada = await this.apiNoticias.borrarNoticia(id);

      return response.status(200).json(noticiaBorrada);
    } catch (error) {
      return console.log("error obtenerNoticias", error);
    }
  };
}

module.exports = ControladorNoticias;
