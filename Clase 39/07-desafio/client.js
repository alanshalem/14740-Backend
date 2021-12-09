const axios = require("axios").default;
const got = require("got").default;

// #region

const ingreso = async () => {
  const { data } = await axios.post("http://localhost:8080/ingreso", {
    numero: Math.random(),
  });

  console.log(data);
};

setInterval(() => {
  ingreso();
}, 2_000);

// #endregion

// #region

const egreso = async () => {
  try {
    const { body } = await got("http://localhost:8080/egreso");

    console.log(body);
  } catch (error) {
    console.error(error);
  }
};

setInterval(() => {
  egreso();
}, 10_000);

// #endregion
