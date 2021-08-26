import express from "express";
import path from "path";

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

server.on("error", (error) => {
  console.error(error);
});

/////////////////////

app.set("views", `${path.resolve()}/views`);
app.set("view engine", "pug");

/////////////////////
// http://localhost:8080/datos?titulo=%3Ci%3EMedidor%3C/i%3E&min=5&max=15&value=12

app.get("/datos", (request, response) => {
  const values = {
    titulo: request.query.titulo,
    min: request.query.min,
    max: request.query.max,
    value: request.query.value,
  };

  response.render("meter.pug", values);
});
