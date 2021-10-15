import express from 'express';
import session from 'express-session';
import redis from 'redis';
import connectRedis from 'connect-redis';

/// ////////////////

const app = express();

/// ////////////////

const redisStore = connectRedis(session);
app.use(
  session({
    store: new redisStore({
      client: redis.createClient(),
      host: 'localhost',
      port: 6379,
      ttl: 60,
    }),
    secret: 'BTC100K',
    resave: false,
    saveUninitialized: false,
  }),
);

/// ////////////////

app.listen(8080, () => {
  console.log('Server listen on 8080');
});

/// //////////

app.get('/root', (request, response) => {
  if (request.session.contador) {
    request.session.contador += 1;

    if (request.session.nombre) {
      return response
        .status(200)
        .send(
          `${request.session.nombre} a visitado el sitio ${request.session.contador} veces`,
        );
    }

    return response
      .status(200)
      .send(
        `Usted a visitado el sitio ${request.session.contador} veces`,
      );
  }

  request.session.contador = 1;
  const { nombre } = request.query;

  if (nombre && !request.session.nombre) {
    request.session.nombre = nombre;
  }

  if (request.session.nombre) {
    return response
      .status(200)
      .send(`Te damos la bienvenida ${request.session.nombre}`);
  }

  return response
    .status(200)
    .send('Te damos la bienvenida');
});

app.get('/olvidar', (request, response) => {
  const { nombre } = request.session;

  request.session.destroy((error) => {
    if (error) {
      return response
        .status(500)
        .send({ error });
    }

    if (nombre) {
      return response
        .status(200)
        .send(`Hasta luego ${nombre}`);
    }

    return response
      .status(200)
      .send('Hasta luego');
  });
});
