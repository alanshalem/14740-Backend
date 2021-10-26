import express from 'express';
import { fork } from 'child_process';

const app = express();

const PORT = 8080;
app.listen(
  PORT,
  () => console.log(`Server listen on ${PORT}`),
);

// !!!!!!!!!

let contador = 0;

const sumar = () => {
  let suma = 0;

  for (let index = 0; index < 5e9; index += 1) {
    suma += 1;
  }

  return suma;
};

app.get(
  '/',
  (_request, response) => {
    contador += 1;

    return response.json({ contador });
  },
);

app.get(
  '/calculo-bloq',
  (_request, response) => response.json({ suma: sumar() }),
);

app.get(
  '/calculo-nobloq',
  (_request, response) => {
    const child = fork('child.js');
    child.on(
      'message',
      (message) => response.json({ suma: message }),
    );
  },
);
