import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

app.listen(8080, () => console.log('Server listen on 8080'));

/// //////////

app.get('/set-cookie', (request, response) => {
  const { nombre } = request.query;
  const { valor } = request.query;

  if (!nombre || !valor) {
    return response
      .status(400)
      .send({
        error: 'set-cookie: falta nombre o valor',
      });
  }

  const ttl = +request.query.ttl;
  let options;

  if (!Number.isNaN(ttl)) {
    options = {
      maxAge: ttl,
    };
  }

  return response
    .cookie(nombre.toString(), valor, options)
    .status(200)
    .json({
      proceso: 'ok',
    });
});

app.get('/clear-cookie', (request, response) => {
  const { nombre } = request.query;

  if (!nombre) {
    return response
      .status(400)
      .json({
        error: 'clear-cookie: falta nombre',
      });
  }

  return response
    .clearCookie(nombre.toString())
    .send('Clear OK');
});

app.get('/get-cookies', (request, response) => response
  .status(200)
  .send(request.cookies));
