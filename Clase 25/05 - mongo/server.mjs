import express from 'express';
import expressSession from 'express-session';
import connectMongo from 'connect-mongo';

/// ////////////////

const app = express();

/// ////////////////

app.use(
  expressSession({
    store: connectMongo.create({
      // mongoUrl: 'mongodb://localhost/sesiones',
      mongoUrl: 'mongodb+srv://edgar:A147852z@cluster0.be9st.mongodb.net/clase25?retryWrites=true&w=majority',
    }),
    secret: 'BTC100K',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 60 * 1000,
    },
  }),
);

/// ////////////////

app.listen(8080);

/// ////////////////

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
