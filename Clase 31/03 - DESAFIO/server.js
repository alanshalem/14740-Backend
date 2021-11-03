const express = require('express');
const log4js = require('log4js');

// #region

log4js.configure({
  appenders: {
    consola: {
      type: 'console',
    },
    archivoError: {
      type: 'file',
      filename: 'error.log',
    },
    archivoWarning: {
      type: 'file',
      filename: 'warn.log',
    },
  },
  categories: {
    default: {
      appenders: ['consola'],
      level: 'trace',
    },
    consola: {
      appenders: ['consola'],
      level: 'info',
    },
    archivoError: {
      appenders: ['archivoError'],
      level: 'error',
    },
    archivoWarning: {
      appenders: ['archivoWarning'],
      level: 'warn',
    },
  },
});

// #endregion

// #region

const app = express();
const consoleLogger = log4js.getLogger('consola');
const errorLogger = log4js.getLogger('archivoError');
const warningLogger = log4js.getLogger('archivoWarning');

// #endregion

// #region

const PORT = process.argv[2] || 8080;

const server = app.listen(PORT, () => {
  consoleLogger.info(`Server listen on port ${PORT}`);
});

server.on('error', () => {
  errorLogger.error('Error iniciando el server');
});

// #endregion

// #region

// http://localhost:8080/sumar?number1=2&number2=5
app.get(
  '/sumar',
  (request, response) => {
    const number1 = +request.query.number1;
    const number2 = +request.query.number2;

    if (Number.isNaN(number1) || Number.isNaN(number2)) {
      errorLogger.error('Parametros invalidos');

      return response.send('Parametros invalidos');
    }

    consoleLogger.info('Operacion exitosa!');

    return response.json(number1 + number2);
  },
);

app.get(
  '*',
  (_request, response) => {
    warningLogger.warn('Ruta invalida');

    return response.send('Ruta invalida');
  },
);

// #endregion
