const express = require('express');

const app = express();

// #region

const PORT = +process.argv[2] || 8080;

app.listen(
  PORT,
  () => console.log(`Server listen on port ${PORT}`),
);

// #endregion

// #region

const calcuteRandoms = (randoms) => {
  for (let index = 0; index < 10000; index += 1) {
    randoms.push(Math.floor(Math.random() * 9));
  }
};

// #endregion

// #region

app.get(
  '/randoms-nodebug',
  (_request, response) => {
    const randoms = [];

    calcuteRandoms(randoms);

    response.json({ randoms });
  },
);

app.get(
  '/randoms-debug',
  (_request, response) => {
    const randoms = [];

    calcuteRandoms(randoms);

    console.log(randoms);

    response.json({ randoms });
  },
);

// #endregion
