import express from 'express';
import session from 'express-session';

/// //////////

const app = express();

/// //////////

const sessionHandler = session({
  secret: 'secreto',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 3_000,
  },
});

app.use(sessionHandler);

/// //////////

app.listen(8080, () => console.log('Server listen on 8080'));

/// //////////

app.get('/con-session', (request, response) => {
  if (request.session.contador) {
    request.session.contador += 1;

    return response
      .send(`Se ha visitado este end-point ${request.session.contador} veces`);
  }

  request.session.contador = 1;

  return response
    .send('Bienvenido');
});

app.get('/logout', (request, response) => {
  request.session.destroy((error) => {
    if (error) {
      return response
        .send({
          status: 'Logout error',
          body: error,
        });
    }

    return response
      .send('Logout OK');
  });
});

app.get('/login', (request, response) => {
  const { username } = request.query;
  const { password } = request.query;

  if (!username || !password) {
    return response
      .send('Login failed');
  }

  if (username === 'amy' && password === 'amypassword') {
    request.session.user = username;
    request.session.guitar = true;

    return response
      .send('Login admin success!');
  }

  request.session.user = username;
  request.session.guitar = false;

  return response
    .status(200)
    .send(`Hola ${username}`);
});

const authHandler = (request, response, next) => {
  if (request.session && request.session.guitar) {
    return next();
  }

  return response
    .sendStatus(401);
};

app.get('/content', authHandler, (_request, response) => {
  response
    .send("You can only see this after you've logged in.");
});
