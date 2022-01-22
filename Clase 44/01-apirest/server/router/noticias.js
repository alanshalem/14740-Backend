const expressGraphql = require("express-graphql");
const graphql = require("graphql");
const config = require("../config.js");

const ControladorNoticias = require("../controlador/noticias.js");

class RouterNoticias {
  constructor() {
    this.controladorNoticias = new ControladorNoticias();
  }

  start() {
    const schema = graphql.buildSchema(`
      type Query {
        noticias(_id: String): [Noticia]
      }
      type Mutation {
        guardarNoticia(
          titulo: String!,
          cuerpo: String!,
          autor: String!,
          imagen: String!,
          email: String!,
          vista: Boolean!,
        ): Noticia,
        actualizarNoticia(
          _id: String!,
          vista: Boolean!,
        ): Noticia,
        borrarNoticia(
          _id: String!,
        ): Noticia,
      },
      type Noticia {
        _id: String,
        titulo: String
        cuerpo: String
        autor: String
        imagen: String
        email: String
        vista: Boolean
      }
    `);

    const root = {
      noticias: (_id) => this.controladorNoticias.obtenerNoticias(_id),
      guardarNoticia: this.controladorNoticias.guardarNoticia,
      actualizarNoticia: (_id, noticias) =>
        this.controladorNoticias.actualizarNoticia(_id, noticias),
      borrarNoticia: (_id) => this.controladorNoticias.borrarNoticia(_id),
    };

    return expressGraphql.graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: config.GRAPHIQL === "true",
    });
  }
}

module.exports = RouterNoticias;
