const winston = require('winston');

// #region Logger

const logger = winston.createLogger(
  {
    level: 'warn',
    transports: [
      new winston.transports.Console(
        {
          level: 'verbose',
        },
      ),
      new winston.transports.File(
        {
          filename: 'info2.log',
        },
      ),
      new winston.transports.File(
        {
          level: 'error',
          filename: 'info.log',
        },
      ),
    ],
  },
);

// #endregion

// #region

logger.log('silly', 'Hola Mundo');
logger.log('debug', 'Hola Mundo');
logger.log('verbose', 'Hola Mundo');
logger.log('info', 'Hola Mundo');
logger.log('warn', 'Hola Mundo');
logger.log('error', 'Hola Mundo');

// #endregion
