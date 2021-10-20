const express = require('express');
const passport = require('passport');
const session = require('express-session');
const TwitterStrategy = require('passport-twitter').Strategy;

/* ------------------------------------------------ */

// ACTIVAR 3-legged OAuth
// http://localhost:8080/auth/twitter/callback
const TWITTER_CLIENT_ID = 'Nl3MVYHg1KgEtTTgPmzAAGoYS';
const TWITTER_CLIENT_SECRET = 'GCPA4ffcXuek813PYQ6QGwMXzkXTDqMtOHLjEli6CA5JELfEtV';

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CLIENT_ID,
      consumerSecret: TWITTER_CLIENT_SECRET,
      callbackURL: '/auth/twitter/callback',
    },
    (_token, _tokenSecret, profile, done) => {
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

/* ------------------------------------------------ */

const app = express();

/* ------------------------------------------------ */

const sessionHandler = session({
  secret: 'secreto',
  resave: true,
  saveUninitialized: true,
});

app.use(sessionHandler);

/* ------------------------------------------------ */

app.listen(
  8080,
  () => console.log('Server ON'),
);

/* ------------------------------------------------ */

app.use(passport.initialize());
app.use(passport.session());

/* ------------------------------------------------ */

app.get(
  '/auth/twitter',
  passport.authenticate('twitter'),
);

app.get(
  '/auth/twitter/callback',
  passport.authenticate(
    'twitter',
    {
      successRedirect: '/',
      failureRedirect: '/faillogin',
    },
  ),
);

app.get(
  '/',
  (_request, response) => response.status(200).send('login-OK'),
);

app.get(
  '/faillogin',
  (_request, response) => response.status(200).send('login-error'),
);
