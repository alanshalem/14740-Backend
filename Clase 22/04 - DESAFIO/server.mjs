import express from "express";
import faker from "faker";

faker.locale = "es";

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

server.on("error", (error) => {
  console.error(error);
});

//////////////n

let id = 0;

app.get("/test", (request, response) => {
  const array = [];

  const cant = Number(request.query.cant);
  const cantidadAGenerar = isNaN(cant) ? 10 : cant;

  for (let index = 0; index < cantidadAGenerar; index++) {
    array.push({
      id: ++id,
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      color: faker.commerce.color(),
    });
  }

  response.json(array);
});
