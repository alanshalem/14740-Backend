const expressGraphql = require("express-graphql");
const graphql = require("graphql");
const config = require("../config.js");
const ControladorPalabras = require("../controlador/palabras.js");

class RouterPalabras {
  constructor() {
    this.controladorPalabras = new ControladorPalabras();
  }

  start() {
    const schema = graphql.buildSchema(`
      type Query {
        palabras: Palabras
      }
      type Mutation {
        guardarPalabra(
          palabra: String!,
        ): Palabra
      },
      type Palabra {
        _id: String,
        timestamp: Float,
        palabra: String
      },
      type Palabras {
        palabras: String
      }
    `);

    const root = {
      palabras: () => this.controladorPalabras.obtenerPalabras(),
      guardarPalabra: this.controladorPalabras.guardarPalabra,
    };

    return expressGraphql.graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: config.GRAPHIQL === "true",
    });
  }
}

module.exports = RouterPalabras;
