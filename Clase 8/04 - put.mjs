import express from "express";

const port = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));

app.put("/api/:id", (request, response) => {
  response.send({
    parametroUrl: request.params.id,
    parametroBody: request.body.algo,
  });
});
