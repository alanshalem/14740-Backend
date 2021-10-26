const { fork } = require('child_process');

const child = fork('child.js');
child.on(
  'message',
  (message) => console.log(
    'Mensaje del hijo',
    message,
  ),
);

console.log('Comienzo del programa Padre');

setTimeout(
  () => child.send({ mensaje: 'Hola!' }),
  2_000,
);
