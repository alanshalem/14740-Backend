const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const productosRouter = require("./routes/productos");

// #region GraphQL

const schema = buildSchema(`
  type Query {
    mensaje: String,
    articulos: [Articulo]
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
  mensaje: () => "Ingrese articulo (GRAPHQL)",
  articulos: () => articulos,
  agregarArticulo,
};

// #endregion

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// GraphQL
app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/productos", productosRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
