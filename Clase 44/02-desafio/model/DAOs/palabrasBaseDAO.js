/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
class PalabrasBaseDAO {
  getNextId(palabras) {
    const { length } = palabras;

    return length ? parseInt(palabras[length - 1]._id, 10) + 1 : 1;
  }
}

module.exports = PalabrasBaseDAO;
