/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
class NoticiasBaseDAO {
  getNextId(noticias) {
    const { length } = noticias;

    return length ? parseInt(noticias[length - 1]._id, 10) + 1 : 1;
  }

  getIndex(_id, noticias) {
    return noticias.findIndex((noticia) =>
      noticia ? Number(noticia._id) === Number(_id) : true
    );
  }
}

module.exports = NoticiasBaseDAO;
