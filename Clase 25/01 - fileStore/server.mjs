import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';

/// ////////////////

const app = express();

/// ////////////////

const fileStore = sessionFileStore(session);

app.use(cookieParser());
app.use(
  session({
    store: new fileStore({
      path: './sesiones',
      ttl: 300,
      retries: 0,
    }),
    secret: 'BTC100K',
    resave: false,
    saveUninitialized: false,
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
