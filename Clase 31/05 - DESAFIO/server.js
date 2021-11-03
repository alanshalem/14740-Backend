const express = require('express');
const winston = require('winston');

// #region Configuracion de winston

const consoleLogger = winston.createLogger(
  {
    transports: [
      new winston.transports.Console(
        {
          level: 'silly',
        },
      ),
    ],
  },
);

const errorLogger = winston.createLogger(
  {
    transports: [
      new winston.transports.File(
        {
          level: 'error',
          filename: 'error.log',
        },
      ),
    ],
  },
);

const warnLogger = winston.createLogger({
  transports: [
    new winston.transports.File(
      {
        level: 'warn',
        filename: 'warn.log',
      },
    ),
  ],
});

// #endregion

// #region Configuracion de express

const app = express();
const PORT = process.argv[2] || 8080;

const server = app.listen(
  PORT,
  () => consoleLogger.info(`Server listen on port ${PORT}`),
);

server.on(
  'error',
  () => errorLogger.error('Error iniciando el server'),
);

// #endregion

// #region Endopoints

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
    warnLogger.warn('Ruta invalida');

    return response.send('Ruta invalida');
  },
);

// #endregion
