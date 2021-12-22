/* eslint-disable no-console */
const mongoose = require("mongoose");
const Config = require("../config.js");
const CustomError = require("../errores/CustomError.js");
const DbClient = require("./DbClient.js");

class MyMongoClient extends DbClient {
  constructor() {
    super();
    this.connected = false;
    this.client = mongoose;
  }

  async connect() {
    try {
      await this.client.connect(Config.db.cnxStr + Config.db.name, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });

      console.log("base de datos conectada");
    } catch (error) {
      throw new CustomError(500, "error al conectarse a mongodb 1", error);
    }
  }

  async disconnect() {
    try {
      await this.client.connection.close();
      console.log("base de datos desconectada");
      this.connected = false;
    } catch (error) {
      throw new CustomError(500, "error al conectarse a mongodb 2", error);
    }
  }
}

module.exports = MyMongoClient;
