/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
const fs = require("fs");
const noticiaDTO = require("../DTOs/noticias.js");
const NoticiasBaseDAO = require("./noticiasBaseDao.js");

class NoticiasFileDAO extends NoticiasBaseDAO {
  constructor(nombreArchivo) {
    super();

    this.nombreArchivo = nombreArchivo;
  }

  async leer(archivo) {
    return JSON.parse(await fs.promises.readFile(archivo, "utf-8"));
  }

  async guardar(archivo, noticias) {
    await fs.promises.writeFile(archivo, JSON.stringify(noticias, null, "\t"));
  }

  obtenerNoticias = async (_id) => {
    try {
      const noticias = await this.leer(this.nombreArchivo);

      if (_id) {
        const indice = this.getIndex(_id, noticias);

        return indice >= 0 ? [noticias[indice]] : [];
      }

      return noticias;
    } catch (error) {
      console.log("error en obtenerNoticias:", error);

      const noticias = [];

      await this.guardar(this.nombreArchivo, noticias);

      return noticias;
    }
  };

  guardarNoticia = async (noticia) => {
    try {
      const noticias = await this.leer(this.nombreArchivo);
      const noticiaGuardada = noticiaDTO(
        noticia,
        this.getNextId(noticias),
        new Date().toLocaleString()
      );

      noticias.push(noticiaGuardada);

      await this.guardar(this.nombreArchivo, noticias);

      return noticiaGuardada;
    } catch (error) {
      console.log("error en guardarNoticia:", error);

      return {};
    }
  };

  actualizarNoticia = async (_id, noticia) => {
    try {
      const noticias = await this.leer(this.nombreArchivo);
      const noticiaNew = noticiaDTO(noticia, _id, new Date().toLocaleString());
      const indice = this.getIndex(_id, noticias);
      const noticiaActualizada = {
        ...(noticias[indice] || {}),
        ...noticiaNew,
      };

      if (indice >= 0) {
        noticias.splice(indice, 1, noticiaActualizada);
      } else {
        noticias.push(noticiaActualizada);
      }

      await this.guardar(this.nombreArchivo, noticias);

      return noticiaActualizada;
    } catch (error) {
      console.log("error en actualizarNoticia:", error);

      return {};
    }
  };

  borrarNoticia = async (_id) => {
    try {
      const noticias = await this.leer(this.nombreArchivo);
      const noticiaBorrada = noticias.splice(
        this.getIndex(_id, noticias),
        1
      )[0];

      await this.guardar(this.nombreArchivo, noticias);

      return noticiaBorrada;
    } catch (error) {
      console.log("error en borrarNoticia:", error);

      return {};
    }
  };
}

module.exports = NoticiasFileDAO;
