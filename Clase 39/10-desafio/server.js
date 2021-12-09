const { app } = require("./app");

// #region [implementacion]

let server;
const PORT = +process.argv[2] || 8080;

const on = () => {
  server = app.listen(PORT);
};

const off = () => server.close();

// #endregion

module.exports = {
  on,
  off,
};
