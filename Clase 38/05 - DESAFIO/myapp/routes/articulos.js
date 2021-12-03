const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const router = express.Router();

// #region recursos

router.get("/ingreso/", (_request, response) => response.render("articulo"));

// #endregion

// #region GraphQL Schema

const schema = buildSchema(`
  type Query {
    articulos: [Articulo],
  },
  type Mutation {
    agregarArticulo(titulo: String!, texto: String!, autor: String!): Boolean
  },
  type Articulo {
    titulo: String,
    texto: String,
    autor: String,
  }
`);

const articulos = [];

const agregarArticulo = ({ titulo, texto, autor }) => {
  const articulo = {
    titulo,
    texto,
    autor,
  };

  articulos.push(articulo);

  return true;
};

const root = {
  articulos: () => articulos,
  agregarArticulo,
};

// #endregion

// #region Middlewares

router.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

// #endregion

module.exports = router;
