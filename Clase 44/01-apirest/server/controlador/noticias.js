const ApiNoticias = require("../api/noticias.js");

class ControladorNoticias {
  constructor() {
    this.apiNoticias = new ApiNoticias();
  }

  obtenerNoticias = async ({ _id }) => {
    try {
      return this.apiNoticias.obtenerNoticias(_id);
    } catch (error) {
      return console.log("error obtenerNoticias", error);
    }
  };

  guardarNoticia = async ({ titulo, cuerpo, autor, imagen, email, vista }) => {
    try {
      const noticia = {
        titulo,
        cuerpo,
        autor,
        imagen,
        email,
        vista,
      };

      return this.apiNoticias.guardarNoticia(noticia);
    } catch (error) {
      return console.log("error obtenerNoticias", error);
    }
  };

  actualizarNoticia = async ({ _id, vista }) => {
    try {
      return this.apiNoticias.actualizarNoticia(_id, { vista });
    } catch (error) {
      return console.log("error obtenerNoticias", error);
    }
  };

  borrarNoticia = async ({ _id }) => {
    console.log(_id);

    try {
      return this.apiNoticias.borrarNoticia(_id);
    } catch (error) {
      return console.log("error obtenerNoticias", error);
    }
  };
}

module.exports = ControladorNoticias;
