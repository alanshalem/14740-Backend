const http = require("http");
const axios = require("axios").default;
const got = require("got").default;

const URL = "http://localhost:8080/";

// #region http

const request = http.request(URL, (response) =>
  response.on("data", (data) => process.stdout.write(`${data}\n`))
);

request.on("error", (error) => console.error(error));

request.end();

// #endregion

// #region axios

(async () => {
  try {
    const { data } = await axios.get(URL);

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();

// #endregion

// #region got

(async () => {
  try {
    const { body } = await got(URL);

    console.log(body);
  } catch (error) {
    console.error(error);
  }
})();

// #endregion
