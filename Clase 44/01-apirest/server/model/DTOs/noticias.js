function noticiaDTO(noticia, _id, fyh) {
  return {
    ...noticia,
    _id: `${_id}`,
    fyh,
  };
}

module.exports = noticiaDTO;
