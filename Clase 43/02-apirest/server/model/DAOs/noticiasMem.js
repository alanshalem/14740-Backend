/* eslint-disable no-underscore-dangle */
const noticiaDTO = require("../DTOs/noticias.js");
const NoticiasBaseDAO = require("./noticiasBaseDao.js");

class NoticiasMemFileDAO extends NoticiasBaseDAO {
  constructor() {
    super();
    this.noticias = [];
  }

  obtenerNoticias = async (_id) => {
    try {
      if (_id) {
        const indice = this.getIndex(_id, this.noticias);

        return indice >= 0 ? [this.noticias[indice]] : [];
      }

      return this.noticias;
    } catch (error) {
      console.log("error en obtenerNoticias", error);

      return [];
    }
  };

  guardarNoticia = async (noticia) => {
    try {
      const noticiaGuardada = noticiaDTO(
        noticia,
        this.getNextId(this.noticias),
        new Date().toLocaleString()
      );

      this.noticias.push(noticiaGuardada);

      return noticiaGuardada;
    } catch (error) {
      console.log("error en guardarNoticia:", error);

      return {};
    }
  };

  actualizarNoticia = async (_id, noticia) => {
    try {
      const noticiaNew = noticiaDTO(noticia, _id, new Date().toLocaleString());

      const indice = this.getIndex(_id, this.noticias);

      const noticiaActualizada = {
        ...(this.noticias[indice] || {}),
        ...noticiaNew,
      };

      if (indice >= 0) {
        this.noticias.splice(indice, 1, noticiaActualizada);
      } else {
        this.noticias.push(noticiaActualizada);
      }

      return noticiaActualizada;
    } catch (error) {
      console.log("error en actualizarNoticia:", error);

      return {};
    }
  };

  borrarNoticia = async (_id) => {
    try {
      return this.noticias.splice(this.getIndex(_id, this.noticias), 1)[0];
    } catch (error) {
      console.log("error en borrarNoticia:", error);

      return {};
    }
  };
}

module.exports = NoticiasMemFileDAO;
