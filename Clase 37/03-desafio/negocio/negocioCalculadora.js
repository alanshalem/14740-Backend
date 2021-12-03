const clase37npm = require('clase37npm');
const dalCalculadora = require('../persistencia/dalCalculadora');

module.exports = {
  getSuma: (query) => {
    const { operando1, operando2 } = query;

    const resultado = {
      tipo: 'Suma',
      parametros: {
        operando1,
        operando2,
      },
      resultado: clase37npm.suma(+operando1, +operando2),
      timestamp: Date.now(),
    };

    return dalCalculadora.save(resultado);
  },
  getResta: (query) => {
    const { operando1, operando2 } = query;

    const resultado = {
      tipo: 'Resta',
      parametros: {
        operando1,
        operando2,
      },
      resultado: clase37npm.resta(+operando1, +operando2),
      timestamp: Date.now(),
    };

    return dalCalculadora.save(resultado);
  },
  getMultiplicacion: (query) => {
    const { operando1, operando2 } = query;

    const resultado = {
      tipo: 'Multiplicacion',
      parametros: {
        operando1,
        operando2,
      },
      resultado: clase37npm.multiplicacion(+operando1, +operando2),
      timestamp: Date.now(),
    };

    return dalCalculadora.save(resultado);
  },
  getDivision: (query) => {
    const { operando1, operando2 } = query;

    const resultado = {
      tipo: 'Division',
      parametros: {
        operando1,
        operando2,
      },
      resultado: clase37npm.division(+operando1, +operando2),
      timestamp: Date.now(),
    };

    return dalCalculadora.save(resultado);
  },
};
