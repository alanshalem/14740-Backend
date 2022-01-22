const express = require("express");
const cors = require("cors");
const config = require("./config.js");
const RouterNoticias = require("./router/noticias.js");

const app = express();

// #region Middlewares

if (config.NODE_ENV === "development") {
  app.use(cors());
}

app.use(express.static("public"));
app.use(express.json());

const routerNoticias = new RouterNoticias();

app.use("/noticias", routerNoticias.start());

// #endregion

// #region Listen

const PORT = config.PORT || 8000;
const server = app.listen(PORT, () =>
  console.log(
    `Servidor express GRAPHQL escuchando en el puerto ${PORT}\rConfig: [Modo: ${
      config.NODE_ENV
    }, Persistencia: ${config.TIPO_PERSISTENCIA}, GRAPHiQL: ${
      config.GRAPHIQL === "true" ? "Si" : "No"
    }]`
  )
);

server.on("error", (error) => console.log("Servidor express en error:", error));

// #endregion
