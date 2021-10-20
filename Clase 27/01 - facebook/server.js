const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// !!!!!!!!!!!!!!!!!

// TEST APP
const FACEBOOK_CLIENT_ID = '285758486746762';
const FACEBOOK_CLIENT_SECRET = '269337fd5d8104ee67bf2594861dafd9';

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/callback',
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

// !!!!!!!!!!!!!!!!!

const app = express();

// !!!!!!!!!!!!!!!!!

app.listen(
  8080,
  () => console.log('Server ON')
  ,
);

// !!!!!!!!!!!!!!!!!

app.use(passport.initialize());
app.use(passport.session());

// !!!!!!!!!!!!!!!!!

app.get(
  '/auth/facebook',
  passport.authenticate('facebook'),
);

app.get(
  '/auth/facebook/callback',
  passport.authenticate(
    'facebook',
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
