const Joi = require("joi");

class Palabras {
  constructor(palabra) {
    this.palabra = palabra;
  }

  static validar(palabra, requerido) {
    const PalabraSchema = Joi.object({
      palabra: requerido ? Joi.string().required() : Joi.string(),
    });

    const { error } = PalabraSchema.validate(palabra);

    if (error) {
      throw error;
    }
  }
}

module.exports = Palabras;
