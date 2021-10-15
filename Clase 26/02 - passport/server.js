const express = require('express');
const passport = require('passport');
const passportLocal = require('passport-local');
const expressSession = require('express-session');
const bcrypt = require('bcrypt');
const handlebars = require('express-handlebars');

const routes = require('./routes');
const config = require('./config');
const controllersdb = require('./controllersdb');
const User = require('./models');

/// //////////////////////////////////////////////////

const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

const loginStrategyName = 'login';
const signUpStrategyName = 'signup';

passport.use(
  loginStrategyName,
  new passportLocal.Strategy(
    {
      passReqToCallback: true,
    },
    (_request, username, password, done) => {
      User.findOne({
        username,
      },
      (error, user) => {
        if (error) {
          return done(error);
        }

        if (!user) {
          console.log(`User Not Found with username ${username}`);

          return done(null, false);
        }

        if (!isValidPassword(user, password)) {
          console.log('Invalid Password');

          return done(null, false);
        }

        return done(null, user);
      });
    },
  ),
);

passport.use(
  signUpStrategyName,
  new passportLocal.Strategy(
    {
      passReqToCallback: true,
    },
    (request, username, password, done) => {
      User.findOne(
        {
          username,
        },
        (error, user) => {
          if (error) {
            console.log(`Error in SignUp: ${error}`);

            return done(error);
          }

          if (user) {
            console.log('User already exists');

            return done(
              null,
              false,
            );
          }

          const newUser = new User();
          newUser.username = username;
          newUser.password = createHash(password);
          newUser.email = request.body.email;
          newUser.firstName = request.body.firstName;
          newUser.lastName = request.body.lastName;

          return newUser.save((error) => {
            if (error) {
              console.log(`Error in Saving user: ${error}`);

              throw error;
            }

            console.log('User Registration succesful');

            return done(null, newUser);
          });
        },
      );
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (error, user) => done(error, user));
});

/// //////////////////////////////////////////////////

const app = express();

/// //////////////////////////////////////////////////

app.engine(
  '.hbs',
  handlebars({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
  }),
);

/// //////////////////////////////////////////////////

app.set('view engine', '.hbs');

/// //////////////////////////////////////////////////

app.use(express.static(`${__dirname}/views`));
app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: 'keyboard cat',
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: config.TIEMPO_EXPIRACION,
    },
    rolling: true,
    resave: true,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

/// //////////////////////////////////////////////////

const checkAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  }

  return response
    .redirect(302, '/login');
};

app.get('/', routes.getRoot);

app.get('/login', routes.getLogin);

app.post(
  '/login',
  passport.authenticate(loginStrategyName, { failureRedirect: '/faillogin' }),
  routes.postLogin,
);

app.get('/faillogin', routes.getFaillogin);

app.get('/signup', routes.getSignup);

app.post(
  '/signup',
  passport.authenticate(signUpStrategyName, { failureRedirect: '/failsignup' }),
  routes.postSignup,
);

app.get('/failsignup', routes.getFailsignup);

app.get('/ruta-protegida', checkAuthentication, (request, response) => {
  const { user } = request;

  console.log(user);

  return response
    .status(200)
    .send('<h1>Ruta OK!</h1>');
});

app.get('/logout', routes.getLogout);

app.get('*', routes.failRoute);

/// //////////////////////////////////////////////////

const PORT = process.env.PORT || 8080;

controllersdb.conectarDB(config.URL_BASE_DE_DATOS, (error) => {
  if (error) {
    console.log('error en conexión de base de datos', error);

    return;
  }

  console.log('BASE DE DATOS CONECTADA');

  app.listen(PORT, (error) => {
    if (error) {
      console.log('error en listen server', error);

      return;
    }

    console.log(`Server running on port ${PORT}`);
  });
});
