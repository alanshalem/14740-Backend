const argvArray = [];

process.on(
  'exit',
  (code) => {
    const tipos = [];

    switch (code) {
      case 5:
        argvArray.forEach((value) => tipos.push(typeof value));
        console.log(
          {
            error: {
              descripcion: 'Error de tipo',
              numeros: argvArray,
              tipos,
            },
          },
        );
        break;
      case 4:
        console.log(
          {
            error: {
              descripcion: 'Entrada vacia',
            },
          },
        );
        break;
      default:
        break;
    }
  },
);

const numeros = [];
let valueNumber;
let error;

process.argv.slice(2).forEach(
  (element) => {
    valueNumber = parseFloat(element);

    if (!Number.isNaN(valueNumber)) {
      numeros.push(valueNumber);
      argvArray.push(valueNumber);
    } else {
      error = 5;

      if (element === 'true' || element === 'false') {
        argvArray.push(Boolean(element));
      } else {
        argvArray.push(String(element));
      }
    }
  },
);

if (numeros.length === 0) {
  process.exit(4);
}

if (error) {
  process.exit(error);
}

console.log({
  datos: {
    numeros,
    promedio: numeros.reduce((previous, current) => previous + current) / numeros.length,
    min: Math.min(...numeros),
    max: Math.max(...numeros),
    ejecutable: process.argv[0],
    pid: process.pid,
  },
});
