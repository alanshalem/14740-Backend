const express = require('express');
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const session = require('express-session');

/// !!!!!!!!!!!!!!!!!

const FACEBOOK_CLIENT_ID = '285758486746762';
const FACEBOOK_CLIENT_SECRET = '269337fd5d8104ee67bf2594861dafd9';

passport.use(
  new passportFacebook.Strategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: '/oklogin',
      profileFields: ['id', 'displayName', 'photos', 'emails'],
    },
    (_accessToken, _refreshToken, profile, done) => {
      console.log(profile);

      return done(
        null,
        profile,
      );
    },
  ),
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

/// !!!!!!!!!!!!!!!!!

const app = express();

/// !!!!!!!!!!!!!!!!!

// Usar session para poder recuperar los datos de la sesion
const sessionHandler = session({
  secret: 'secreto',
  resave: true,
  saveUninitialized: true,
});

app.use(sessionHandler);
app.use(passport.initialize());
app.use(passport.session());

/// !!!!!!!!!!!!!!!!!

app.set(
  'view engine',
  'ejs',
);

/// !!!!!!!!!!!!!!!!!

app.listen(
  8080,
  () => console.log('Server listen on 8080'),
);

/// !!!!!!!!!!!!!!!!!

app.get(
  '/',
  (request, response) => {
    if (request.isAuthenticated()) {
      return response.render(
        'datos.ejs',
        request.user,
      );
    }

    return response.render('registro.ejs');
  },
);

app.post(
  '/login',
  passport.authenticate('facebook'),
);

app.get(
  '/oklogin',
  passport.authenticate(
    'facebook',
    {
      successRedirect: '/datos',
      failureRedirect: '/faillogin',
    },
  ),
);

app.get(
  '/datos',
  (request, response) => {
    if (request.isAuthenticated()) {
      return response.render(
        'datos.ejs',
        request.user,
      );
    }

    return response.redirect('/');
  },
);

app.get(
  '/faillogin',
  (_request, response) => response.status(500).send('Error LogIn'),
);

app.get(
  '/logout',
  (request, response) => {
    request.logOut();

    return response.redirect('/');
  },
);
