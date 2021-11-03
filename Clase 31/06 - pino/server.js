const pino = require('pino');

// #region [ Configuraciones ]

const logger = pino(
  {
    level: 'trace',
  },
);

// #endregion

// #region

logger.trace('trace');
logger.debug('debug');
logger.info('info');
logger.warn(
  { hola: 'mundo' },
  'warn',
);
logger.error('error');
logger.fatal('fatal');

console.log();

const child = logger.child(
  {
    child: true,
  },
);
child.trace('trace');
child.debug('debug');
child.info('info');
child.warn(
  {
    hola: 'mundo',
  },
  'warn',
);
child.error('error');
child.fatal('fatal');

// #endregion
