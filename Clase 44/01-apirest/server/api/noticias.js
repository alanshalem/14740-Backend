/* eslint-disable class-methods-use-this */
const config = require("../config.js");
const NoticiasFactoryDAO = require("../model/DAOs/noticiasFactory.js");
const noticiaModel = require("../model/models/noticia.js");

class ApiNoticias {
  constructor() {
    this.noticiasDAO = NoticiasFactoryDAO.get(config.TIPO_PERSISTENCIA);
  }

  async obtenerNoticias(id) {
    return this.noticiasDAO.obtenerNoticias(id);
  }

  async guardarNoticia(noticia) {
    this.asegurarNoticiaValida(noticia, true);

    return this.noticiasDAO.guardarNoticia(noticia);
  }

  async actualizarNoticia(id, noticia) {
    this.asegurarNoticiaValida(noticia, false);

    return this.noticiasDAO.actualizarNoticia(id, noticia);
  }

  async borrarNoticia(id) {
    return this.noticiasDAO.borrarNoticia(id);
  }

  asegurarNoticiaValida(noticia, requerido) {
    try {
      noticiaModel.validar(noticia, requerido);
    } catch (error) {
      throw new Error(
        `la noticia posee un formato json invalido o faltan datos: ${error.details[0].message}`
      );
    }
  }
}

module.exports = ApiNoticias;
