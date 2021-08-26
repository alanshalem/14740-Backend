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

app.use(express.urlencoded({ extended: true }));

/////////////////

app.set("view engine", "ejs");

/////////////////

const usuarios = [];
app.get("/", (request, response) => {
  const values = {
    usuarios: usuarios,
  };

  response.render("pages/index.ejs", values);
});

app.post("/datos", (request, response) => {
  const body = request.body;

  usuarios.push({
    nombre: body.nombre,
    apellido: body.apellido,
    edad: body.edad,
  });

  response.redirect("/");
});
