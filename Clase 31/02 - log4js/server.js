const log4js = require('log4js');

// #region Configuracion de Log4js

log4js.configure({
  appenders: {
    miLoggerConsole: {
      type: 'console',
    },
    miLoggerFile: {
      type: 'file',
      filename: 'info.log',
    },
    miLoggerFile2: {
      type: 'file',
      filename: 'info2.log',
    },
  },
  categories: {
    default: {
      appenders: ['miLoggerConsole'],
      level: 'trace',
    },
    consola: {
      appenders: ['miLoggerConsole'],
      level: 'debug',
    },
    archivo: {
      appenders: ['miLoggerFile'],
      level: 'warn',
    },
    archivo2: {
      appenders: ['miLoggerFile2'],
      level: 'info',
    },
    todos: {
      appenders: ['miLoggerConsole', 'miLoggerFile'],
      level: 'error',
    },
  },
});

// #endregion

// #region Log4js

console.log('default');

let logger = log4js.getLogger();
logger.trace('Hola');
logger.debug('Hola');
logger.info('Hola');
logger.warn('Hola');
logger.error('Hola');
logger.fatal('Hola');

console.log('consola');

logger = log4js.getLogger('consola');
logger.trace('Hola');
logger.debug('Hola');
logger.info('Hola');
logger.warn('Hola');
logger.error('Hola');
logger.fatal('Hola');

console.log('archivo');

logger = log4js.getLogger('archivo');
logger.trace('Hola');
logger.debug('Hola');
logger.info('Hola');
logger.warn('Hola');
logger.error('Hola');
logger.fatal('Hola');

console.log('archivo2');

logger = log4js.getLogger('archivo2');
logger.trace('Hola');
logger.debug('Hola');
logger.info('Hola');
logger.warn('Hola');
logger.error('Hola');
logger.fatal('Hola');

console.log('todos');

logger = log4js.getLogger('todos');
logger.trace('Hola');
logger.debug('Hola');
logger.info('Hola');
logger.warn('Hola');
logger.error('Hola');
logger.fatal('Hola');

// #endregion
