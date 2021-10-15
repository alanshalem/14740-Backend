import express from 'express';
import session from 'express-session';
import redis from 'redis';
import connectRedis from 'connect-redis';

/// //////////

const redisClient = redis.createClient();
const redisStore = connectRedis(session);

/// //////////

const app = express();

/// //////////

app.use(
  session({
    store: new redisStore({
      host: 'localhost',
      port: 6379,
      client: redisClient,
      ttl: 300,
    }),
    secret: 'BTC100K',
    resave: false,
    saveUninitialized: false,
  }),
);

/// //////////

app.listen(8080);

/// //////////

app.get('/', (request, response) => {
  request.session.hola = 'mundo';

  return response
    .status(200)
    .send(request.session.hola);
});

app.get('/logout', (request, response) => {
  request.session.destroy();

  return response
    .status(200)
    .send('OK');
});
