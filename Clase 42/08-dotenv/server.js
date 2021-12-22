const express = require("express");
const config = require("./config");

console.log(`NODE_ENV=${config.NODE_ENV}`);

const app = express();

app.listen(Number(config.PORT), config.HOST, () =>
  console.log(`Server listen on http://${config.HOST}:${config.PORT}`)
);

app.get("/", (_request, response) => response.status(200).send("Hello World"));
