const express = require("express");
const debug = require("debug")("myapp:server");

const router = express.Router();

router.get("/ingreso", (_request, response) => response.render("index"));

const productos = [];
let id = 0;

router.post("/", (request, respose) => {
  const producto = {
    id: (id += 1),
    nombre: request.body.nombre,
    precio: request.body.precio,
  };

  productos.push(producto);

  return respose.redirect("/productos/");
});

router.get("/", (_request, response) => {
  debug(productos);

  return response.status(200).json(productos);
});

// * Esta ruta se confunde con /algo, "algo" lo toma con al id
router.get("/:id", (request, response) => {
  const producto = productos.find(
    (element) => +element.id === +request.params.id
  );

  if (producto === undefined) {
    return response.status(200).json("Producto no encontrado");
  }

  return response.status(200).json(producto);
});

router.put("/:id", (request, response) => {
  const producto = productos.find(
    (element) => +element.id === +request.params.id
  );

  if (producto === undefined) {
    return response.status(200).send("Producto no encontrado");
  }

  producto.nombre = request.body.nombre || producto.nombre;
  producto.precio = request.body.precio || producto.precio;

  return response.status(200).json(producto);
});

router.delete("/:id", (request, response) => {
  const productoIndex = productos.indexOf(
    (element) => +element.id === +request.params.id
  );

  productos.splice(productoIndex, 1);

  return response.status(200).send(`Producto eliminado: ${request.params.id}`);
});

module.exports = router;
