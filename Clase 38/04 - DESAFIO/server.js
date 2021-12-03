const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

// #region GraphQL Schema

const schema = buildSchema(`
  type Query {
    mensaje: String
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
  mensaje: () => "Ingrese artículo",
  articulos: () => articulos,
  agregarArticulo,
};

// #endregion

const app = express();

// #region Middlewares

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use(express.static(`${__dirname}/public`));

// #endregion

const PORT = +process.argv[2] || 8080;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
