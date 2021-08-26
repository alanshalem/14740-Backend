import express from "express";

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

server.on("error", (error) => {
  console.error(error);
});

/////////////////

app.set("view engine", "ejs");

/////////////////

app.get("/", (request, response) => {
  const values = {
    titulo: "Hola EJS",
    mostrarMensaje: true,
  };

  response.render("hello.ejs", values);
});
