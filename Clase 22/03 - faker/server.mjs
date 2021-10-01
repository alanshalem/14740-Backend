import express from "express";
import { usuariosRouter, notFound } from "./router/usuarios.mjs";

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});

server.on("error", (error) => {
  console.log(error);
});

/////////////

app.use(express.json());
app.use("/api", usuariosRouter());

/////////////

app.get("/test", (_request, response) => {
  response.send("Hola mundo!");
});

app.get("*", notFound);
app.post("*", notFound);
app.put("*", notFound);
app.delete("*", notFound);
