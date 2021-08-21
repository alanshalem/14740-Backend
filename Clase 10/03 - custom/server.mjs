import fs from "fs";
import express from "express";

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});

server.on("error", (error) => console.log(error));

/////////////

const ENGINE_NAME = "ntl";
app.engine(ENGINE_NAME, (filePath, options, callback) => {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      return callback(new Error(error));
    }

    const rendered = content
      .toString()
      .replace("#title#", options.title)
      .replace("#message#", options.message);

    return callback(null, rendered);
  });
});

app.set("views", "./views");
app.set("view engine", ENGINE_NAME);

/////////////

app.get("/", (request, response) => {
  response.render("index.ntl", {
    title: "Hola",
    message: "mundo!",
  });
});
