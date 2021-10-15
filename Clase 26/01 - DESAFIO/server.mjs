import express from 'express';

/// //////////

const app = express();

/// //////////

app.use(express.urlencoded({ extended: true }));

/// //////////

app.set('view engine', 'ejs');

/// //////////

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listen on ${PORT}`));

/// //////////

const usuarios = [];
const searchUser = (nombre, password) => usuarios.find(
  (element) => element.nombre === nombre && element.password === password,
);

app.get(
  '/',
  (_request, response) => response.render('registro.ejs'),
);

app.post('/registro', (request, response) => {
  const { nombre, password } = request.body;
  const usuario = searchUser(nombre, password);

  if (usuario) {
    return response
      .status(500)
      .json({
        error: 'Usuario existente',
      });
  }

  usuarios.push({
    nombre,
    password,
    direccion: request.body.direccion,
  });

  return response
    .status(200)
    .send('OK');
});

app.post('/login', (request, response) => {
  const usuario = searchUser(request.body.nombre, request.body.password);

  if (usuario) {
    return response
      .redirect(307, '/datos');
  }

  return response
    .redirect(302, '/');
});

app.post('/datos', (request, response) => {
  if (!request.body.nombre) {
    return response
      .redirect(307, '/');
  }

  const usuario = searchUser(request.body.nombre, request.body.password);
  const datos = {
    nombre: usuario.nombre,
    direccion: usuario.direccion,
    password: usuario.password,
  };

  return response
    .render('datos.ejs', datos);
});

app.get('/logout', (request, response) => {
  const index = usuarios.indexOf(
    (element) => element.nombre === request.session.nombre,
  );

  usuarios.splice(index, 1);

  return response
    .redirect(307, '/');
});
