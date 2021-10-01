import express from "express";
import { generar, get, post, put, del } from "../api/usuarios.mjs";

const router = express.Router();

export const notFound = (request, response) => {
  const { url, method } = request;

  response.send(
    `Ruta <span style="color: blue;">${method}</span> <i style="color: red;">${url}</i> no encontrada`
  );
};

export const usuariosRouter = () => {
  router.get("/generar/:cantidad?", generar);
  router.get("/:id?", get);
  router.post("/", post);
  router.put("/:id", put);
  router.delete("/:id", del);

  return router;
};
