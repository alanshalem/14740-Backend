let contador = 0;

process.on(
  'message',
  (message) => {
    console.log(
      'Mensaje del padre',
      message,
    );

    setInterval(
      () => {
        contador += 1;
        process.send({ contador });
      },
      1_000,
    );
  },
);
