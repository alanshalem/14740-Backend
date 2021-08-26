import express from "express";

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

server.on("error", (error) => {
  console.error(error);
});

/////////////////////

app.set("view engine", "ejs");

/////////////////////
// http://localhost:8080/datos?titulo=%3Ci%20style=%22color:%20blue%22%3EHola%3C/i%3E&min=0&value=6&max=10

app.get("/datos", (request, response) => {
  const values = {
    titulo: request.query.titulo,
    min: request.query.min,
    max: request.query.max,
    value: request.query.value,
  };
  
  response.render("meter.ejs", values);
});
