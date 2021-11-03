const express = require('express');
const compression = require('compression');

// #region [ Configuraciones ]

const app = express();

// #endregion

// #region [ Middlewares ]

app.use(compression());

// #endregion

// #region [ Rutas ]

app.get(
  '/saludo',
  (_request, response) => {
    let frase = '';
    for (let index = 0; index < 1000; index += 1) {
      frase += 'Hola que tal';
    }

    return response.send(frase);
  },
);

// #endregion

// #region [ Inicializacion ]

const PORT = process.argv[2] || 8080;

app.listen(
  PORT,
  () => console.log(`Server listen on port ${PORT}`),
);

// #endregion
