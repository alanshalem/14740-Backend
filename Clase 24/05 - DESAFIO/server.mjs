import express from 'express';
import session from 'express-session';

/// //////////

const app = express();

/// //////////

const sessionHandler = session(
  {
    secret: 'secreto',
    resave: true,
    saveUninitialized: true,
  },
);

app.use(sessionHandler);

/// //////////

const PORT = 8080;

app.listen(
  PORT,
  () => console.log(`Server listen on ${PORT}`),
);

/// //////////

app.get('/root', (request, response) => {
  if (request.session.contador) {
    request.session.contador += 1;

    if (request.session.nombre) {
      return response
        .send(`${request.session.nombre} a visitado el sitio ${request.session.contador} veces`);
    }

    return response
      .send(`Usted a visitado el sitio ${request.session.contador} veces`);
  }

  request.session.contador = 1;
  const { nombre: queryNombre } = request.query;

  if (queryNombre) {
    request.session.nombre = queryNombre;

    return response
      .send(`Te damos la bienvenida ${queryNombre}`);
  }

  return response
    .send('Te damos la bienvenida');
});

app.get('/olvidar', (request, response) => {
  const { nombre } = request.session;

  request.session.destroy((error) => {
    if (error) {
      return response
        .json({
          error,
        });
    }

    if (nombre) {
      return response
        .send(`Hasta luego ${nombre}`);
    }

    return response
      .send('Hasta luego');
  });
});
