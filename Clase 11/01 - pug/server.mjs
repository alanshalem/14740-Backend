import express from "express";
import path from "path";

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

server.on("error", (error) => console.error(error));

///////////////

app.set("views", `${path.resolve()}/views`);
app.set("view engine", "pug");

///////////////

app.get("/hello", (request, response) => {
  const values = {
    mensaje: "Hola mundo PUG",
  };

  response.render("hello.pug", values);
});
