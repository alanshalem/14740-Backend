const joi = require("joi");

class Noticia {
  static validar(noticia, requerido) {
    const noticiaSchema = joi.object({
      titulo: requerido ? joi.string().required() : joi.string(),
      cuerpo: requerido ? joi.string().required() : joi.string(),
      autor: requerido ? joi.string().required() : joi.string(),
      imagen: requerido ? joi.string().required() : joi.string(),
      email: requerido ? joi.string().required() : joi.string(),
      vista: requerido ? joi.boolean().required() : joi.boolean(),
    });

    const { error } = noticiaSchema.validate(noticia);

    if (error) {
      throw error;
    }
  }
}

module.exports = Noticia;
