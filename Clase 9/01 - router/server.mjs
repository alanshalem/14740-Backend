import express from "express";
const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server iniciado OK en puerto ${PORT}`);
});

server.on("error", (error) => {
  console.error(error);
});

// ROUTER

const router = express.Router();
app.use("/hola", router);

router.get("/get", (require, response) => {
  response.send("GET recibido!");
});

router.post("/post", (require, response) => {
  response.send("POST recibido!");
});

