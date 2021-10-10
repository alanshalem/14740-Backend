import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

app.listen(8080, () => {
  console.log('Server listen on 8080');
});

/// //////////

app.get('/set', (_request, response) => {
  response
    .cookie('server', 'express')
    .send('Cookie set');
});

app.get('/setEX', (_request, response) => {
  response
    .cookie('serverEX', 'expressEX', { maxAge: 30_000 })
    .send('Cookie setEX');
});

app.get('/get', (request, response) => {
  response
    .send(request.cookies.server);
});

app.get('/getEX', (request, response) => {
  response
    .send(request.cookies.serverEX);
});

app.get('/clear', (_request, response) => {
  response
    .clearCookie('server')
    .clearCookie('serverEX')
    .send('Cookie clear');
});
