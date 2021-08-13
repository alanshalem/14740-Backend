import express from "express";

const port = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));

app.post("/api", (request, response) => {
  response.send(`Parametro en body: ${request.body.algo}`);
});