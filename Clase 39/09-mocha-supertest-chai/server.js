const express = require("express");

// #region

const mongoose = require("mongoose");
const validaciones = require("./validaciones/usuarios");
const model = require("./model/usuarios");

// #endregion

// #region

const app = express();
const router = express.Router();

// #endregion

// #region

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

// #endregion

// #region

app.get("/datos/:nombre?/:edad?", (request, response) => {
  const { url, method } = request;
  const { nombre, edad } = request.params;

  return response
    .status(200)
    .send(
      `<h3>Ruta: ${method} - url: ${url} - nombre: ${nombre} - edad: ${edad}</h3>`
    );
});

router.get("/:id?", (request, response) => {
  const { id } = request.params;
  const query = id ? { _id: id } : {};

  model.Usuario.find(query, (error, usuarios) => {
    if (error) {
      throw new Error(`Error en la lectura de usuarios: ${error}`);
    }

    usuarios.forEach((usuario) => {
      console.log(usuario);
    });

    return response.status(200).send(usuarios);
  });
});

router.post("/", (request, response) => {
  const usuario = request.body;
  const validacion = validaciones.validar(usuario);

  if (validacion.result) {
    const usuarioNuevo = new model.Usuario(usuario);

    return usuarioNuevo.save((error) => {
      if (error) {
        throw new Error(`Error al guardar el usuario: ${error}`);
      }

      console.log("Usuario guardado correctamente");

      return response.status(200).send(usuario);
    });
  }

  return response.status(400).send(validacion.error);
});

router.put("/:id", async (request, response) => {
  const { id } = request.params;
  const usuario = request.body;

  const validacion = validaciones.validar(usuario);
  if (validacion.result) {
    const respuesta = await model.Usuario.updateOne(
      { _id: id },
      { $set: usuario }
    );

    return response.status(200).send(respuesta);
  }

  return response.status(400).send(validacion.error);
});

router.delete(":/id", async (request, response) => {
  const { id } = request.params;

  const respuesta = await model.Usuario.deleteOne({ _id: id });

  return response.status(200).send(respuesta);
});

// #endregion

// #region

const PORT = 8080;

mongoose.connect(
  "mongodb://localhost/mibase",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      throw new Error(`Error al conectar a la base de datos: ${error}`);
    }

    console.log("Base de datos conectada");

    const server = app.listen(PORT, () =>
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
    );

    server.on("error", (error) =>
      console.log(`Error al iniciar el servidor: ${error}`)
    );
  }
);

// #endregion

module.exports = {
  app,
};
