const negocioCalculadora = require('../negocio/negocioCalculadora');

module.exports = {
  getSuma: async (request, response) => {
    const { query } = request;

    const resultado = await negocioCalculadora.getSuma(query);

    return response.status(200).json(resultado);
  },
  getResta: async (request, response) => {
    const { query } = request;

    const resultado = await negocioCalculadora.getResta(query);

    return response.status(200).json(resultado);
  },
  getMultiplicacion: async (request, response) => {
    const { query } = request;

    const resultado = await negocioCalculadora.getMultiplicacion(query);

    return response.status(200).json(resultado);
  },
  getDivision: async (request, response) => {
    const { query } = request;

    const resultado = await negocioCalculadora.getDivision(query);

    return response.status(200).json(resultado);
  },
};
