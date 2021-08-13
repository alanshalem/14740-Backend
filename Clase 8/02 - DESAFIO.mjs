import express from "express";

const frase = "Hola mundo como están";
const port = 8080;
const app = express();

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));

app.get("/api/getFrase", (_, respose) => {
  respose.send(frase);
});

app.get("/api/getLetra/:num", (request, response) => {
  generateResponse(frase.split("")[request.params.num - 1], response);
});

app.get("/api/getPalabra/:num", (request, response) => {
  generateResponse(frase.split(" ")[request.params.num - 1], response);
});

function generateResponse(palabra, response) {
  if (palabra === undefined) {
    response.json({
      error: "El parámetro está fuera de rango",
    });
  }

  response.send(palabra);
}
