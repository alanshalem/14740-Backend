const express = require('express');
const passport = require('passport');
const passportLocal = require('passport-local');
const expressSession = require('express-session');

/// //////////////////////////////////////////////////

const loginStrategyName = 'login';
const signUpStrategyName = 'signup';
const users = [];
const findUser = (username) => users.find((element) => element.username === username);

passport.use(
  loginStrategyName,
  new passportLocal.Strategy(
    {
      passReqToCallback: true,
    },
    (_request, username, password, done) => {
      const user = findUser(username);

      if (!user) {
        console.log('Usuario no registrado');

        return done(null, false);
      }

      if (user.password !== password) {
        console.log('Contraseña invalida');

        return done(null, false);
      }

      console.log('Login OK');

      return done(null, user);
    },
  ),
);

passport.use(
  signUpStrategyName,
  new passportLocal.Strategy(
    {
      passReqToCallback: true,
    },
    (_request, username, password, done) => {
      if (findUser(username)) {
        console.log('Usuario ya existe');

        return done(null, false);
      }

      const user = {
        username,
        password,
      };

      users.push(user);

      console.log('SignUp OK');

      return done(null, user);
    },
  ),
);

passport.serializeUser((user, done) => {
  console.log(user);

  return done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log(user);

  return done(null, findUser(user.username));
});

/// //////////

const app = express();

/// //////////

app.use(
  expressSession({
    secret: 'keyboard cat',
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 20000,
    },
    rolling: true,
    resave: true,
    saveUninitialized: false,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

/// //////////

app.set('view engine', 'ejs');

/// //////////

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listen on ${PORT}`));

/// //////////

const checkAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  }

  return response
    .redirect(302, '/');
};

app.get('/', (_request, response) => response.status(200).render('registro.ejs'));

app.post(
  '/registro',
  passport.authenticate(signUpStrategyName, { failureRedirect: '/failsignup' }),
  (_request, response) => response.status(200).send('SignUp OK')
  ,
);

app.get('/failsignup', (_request, response) => response.status(500).send('Error SingUp'));

app.post(
  '/login',
  passport.authenticate(loginStrategyName, { failureRedirect: '/faillogin' }),
  (request, response) => {
    request.session.username = request.body.username;
    request.session.password = request.body.password;

    return response
      .status(200)
      .send('Login OK');
  },
);

app.get('/faillogin', (_request, response) => response.status(500).send('Error Login'));

app.get('/datos', checkAuthentication, (request, response) => {
  const datos = {
    username: request.session.username,
    password: request.session.password,
  };

  return response
    .status(200)
    .render('datos.ejs', datos);
});

app.get('/logout', (request, response) => {
  request.session.destroy((error) => {
    if (error) {
      return response
        .json({ error });
    }

    const index = users.indexOf(
      (element) => element.username === request.session.username,
    );

    users.splice(index, 1);

    return response
      .status(200)
      .redirect('/');
  });
});
