const express = require('express');
const jwt = require('jsonwebtoken');

// !!!!!!!!!!!!!!!!!!

const PRIVATE_KEY = 'myprivatekey';

const generateAuthToken = (nombre, direccion) => {
  const token = jwt.sign(
    {
      nombre,
      direccion,
    },
    PRIVATE_KEY,
    {
      expiresIn: '60s',
    },
  );

  return token;
};

const auth = (request, response, next) => {
  const token = request.headers['x-access-token'] || request.headers.authorization;

  if (!token) {
    console.log('if no token found, return response (without going to the next middleware)');

    return response.status(401).json(
      {
        error: 'if no token found, return response (without going to the next middleware)',
      },
    );
  }

  try {
    request.user = jwt.verify(
      token,
      PRIVATE_KEY,
    );

    return next();
  } catch (exception) {
    console.log('if invalid token');

    return response.status(500).json({ error: 'if invalid token' });
  }
};

// !!!!!!!!!!!!!!!!!!

const app = express();

// !!!!!!!!!!!!!!!!!!

app.set(
  'view engine',
  'ejs',
);

// !!!!!!!!!!!!!!!!!!

app.listen(
  8080,
  () => console.log('Server listen on 8080'),
);

// !!!!!!!!!!!!!!!!!!

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// !!!!!!!!!!!!!!!!!!

const usuarios = [];

app.get(
  '/',
  (_request, response) => response.render('registro.ejs'),
);

app.post(
  '/login',
  auth,
  (request, response) => {
    const { nombre, password } = request.body;
    const usuario = usuarios.find((element) => element.nombre === nombre);

    if (usuario) {
      if (usuario.nombre === nombre && usuario.password === password) {
        return response.status(200).send('Login OK');
      }

      return response.status(401).json({ error: 'Error credenciales' });
    }

    return response.status(401).json({ error: 'Usuario no registrado' });
  },
);

app.post(
  '/register',
  (request, response) => {
    const { nombre, direccion } = request.body;
    const usuario = usuarios.find((element) => element.nombre === nombre);

    if (!usuario) {
      usuarios.push(request.body);
      const token = generateAuthToken(
        nombre,
        direccion,
      );

      return response.header(
        'x-auth-token',
        token,
      ).status(200).send('Register OK');
    }

    return response.status(500).json({ error: 'Usuario ya registrado' });
  },
);

app.get(
  '/datos',
  auth,
  (request, response) => response.render(
    'datos.ejs',
    {
      datos: request.user,
    },
  ),
);

app.get(
  '/logout',
  (request, response) => {
    request.session.destroy((error) => {
      if (error) {
        return response.status(500).json(
          {
            status: 'Logout error',
            body: error,
          },
        );
      }

      return response.send('Logout OK');
    });
  },
);
