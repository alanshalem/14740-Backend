import express from "express";

const port = 8080;
const app = express();

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));

app.get("/api/sumar/:num1/:num2", (request, respose) => {
  let result = JSON.stringify(
    parseFloat(request.params.num1) + parseFloat(request.params.num2)
  );

  if (result !== "null") {
    respose.send(result);
    return;
  }

  respose.send("Parametros incorrectos");
});

app.get("/api/sumar", (request, respose) => {
  let result = JSON.stringify(
    parseFloat(request.query.num1) + parseFloat(request.query.num2)
  );

  if (result !== "null") {
    respose.send(result);
    return;
  }

  respose.send("Parametros incorrectos");
});

app.get("/api/operacion/:operacion", (request, respose) => {
  const operacion = request.params.operacion.split("");
  let result = JSON.stringify(parseFloat(operacion[0]) + parseFloat(operacion[2]));

  if (result !== "null") {
    respose.send(result);
    return;
  }

  respose.send("Parametros incorrectos");
});

app.post("/api", (_, response) => {
  response.send("ok post");
});

app.put("/api", (_, response) => {
  response.send("ok put");
});

app.delete("/api", (_, response) => {
  response.send("ok delete");
});
