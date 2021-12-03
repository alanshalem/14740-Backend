const resultados = [];

module.exports = {
  save: (resultado) => new Promise(
    (resolve) => {
      resultados.push(resultado);

      resolve(resultado.resultado);
    },
  ),
};
