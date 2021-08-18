import express from "express";

const port = 8080;
const app = express();

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));

//////////////

const middleware = (request, response, next) => {
  console.log("Middleware App");
  next();
};

app.use(middleware);

app.get("/hola", (request, response) => {
  response.send("Hola mundo!");
});

//////////////

const filtro1 = (request, response, next) => {
  request.propiedad1 = "Pasó por el filtro1";
  next();
};

const filtro2 = (request, response, next) => {
  request.propiedad2 = "Pasó por el filtro2";
  next();
};

app.get("/path1", filtro1, filtro2, (request, response) => {
  const { propiedad1, propiedad2 } = request;
  response.send(`Hola mundo!\n${propiedad1}\n${propiedad2}`);
});

//////////////

const router = express.Router();

router.use((request, response, next) => {
  console.log("Middleware router!");
  next();
});

router.use((error, request, response, next) => {
  console.error(error.stack);
  response.status().send("Error!");
});

router.get("/algo", (request, response) => {
  response.send("Hola mundo!");
});

app.use("/router", router);
