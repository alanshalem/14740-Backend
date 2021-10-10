import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

const SECRET = 'BTC50k';
app.use(cookieParser());

app.listen(
  8080,
  () => console.log('Server listen on 8080'),
);

/// //////////

app.get('/set', (_request, response) => response
  .cookie(
    'server',
    'hola',
    {
      signed: true,
    },
  )
  .send('Cookie set'));

app.get('/get', (request, response) => {
  const responseBody = cookieParser.signedCookies(request.cookies, SECRET);

  response.json(responseBody);
});
