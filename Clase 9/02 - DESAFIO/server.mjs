import express from "express";

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () =>
  console.log(`Server listen on port ${PORT}`)
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
  mascotas.push({
    nombre: request.body.nombre,
    raza: request.body.raza,
    edad: request.body.edad,
  });

  response.json("Mascota añadida");
});

// PERSONAS

const personasRouter = express.Router();
app.use("/personas", personasRouter);

const personas = [];
personasRouter.get("/listar", (_, response) => {
  response.json(personas);
});

personasRouter.post("/guardar", (request, response) => {
  personas.push({
    nombre: request.body.nombre,
    apellido: request.body.apellido,
    edad: request.body.edad,
  });

  response.json("Persona añadida");
});
