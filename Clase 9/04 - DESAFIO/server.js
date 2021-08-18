const express = require("express");

const port = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));

// MASCOTAS

const mascotasRouter = express.Router();
app.use("/mascotas", mascotasRouter);

const mascotas = [];
mascotasRouter.get("/listar", (_, response) => {
  response.json(mascotas);
});

mascotasRouter.post("/guardar", (request, response) => {
  const mascota = {
    nombre: request.body.nombre,
    raza: request.body.raza,
    edad: request.body.edad,
  };

  mascotas.push(mascota);
  response.json(mascota);
});

// PERSONAS

const personasRouter = express.Router();
app.use("/personas", personasRouter);

const personas = [];
personasRouter.get("/listar", (_, response) => {
  response.json(personas);
});

personasRouter.post("/guardar", (request, response) => {
  const persona = {
    nombre: request.body.nombre,
    apellido: request.body.apellido,
    edad: request.body.edad,
  };

  personas.push(persona);
  response.json(persona);
});
