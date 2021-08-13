import express, { response } from "express";

const frase = "Hola mundo como están";
const port = 8080;
const app = express();

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));

app.get("/hola", (request, response) => {
  if (Object.entries(request.query).length > 0) {
    const objeto = {
      saludo: request.query.saludo,
      palabra: request.query.palabra,
    };

    response.send(objeto);
    return;
  }

  response.send("sin parametros");
});

//////////////////

app.get("/hola/:num/algo", (request, response) => {
  response.send(`Parametro recibido: ${request.params.num}`)
});
