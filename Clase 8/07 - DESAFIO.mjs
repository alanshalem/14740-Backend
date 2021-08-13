import express from "express";

let frase = "Frase inicial sssss bbbbbbbb";
const port = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));

app.get("/api/leer", (_, respose) => {
  respose.send(frase);
});

app.get("/api/leer/:pos", (request, response) => {
  generateResponse(frase.split(" ")[request.params.pos - 1], response);
});

app.post("/api/guardar", (request, response) => {
  frase += " " + request.body.palabra;
  response.send(request.body.palabra);
});

app.put("/api/actualizar/:pos", (request, response) => {
  let fraseArray = frase.split(" ");
  fraseArray[request.params.pos - 1] = request.body.palabra;
  frase = fraseArray.join(" ");
  response.send(request.body.palabra);
});

app.delete("/api/borrar/:pos", (request, response) => {
  let fraseArray = frase.split(" ");
  const word = fraseArray[request.params.pos - 1];
  fraseArray.splice(request.params.pos - 1, 1);
  frase = fraseArray.join(" ");
  response.send(word);
});

function generateResponse(palabra, response) {
  if (palabra === undefined) {
    response.json({
      error: "El parámetro está fuera de rango",
    });
  }

  response.send(palabra);
}
