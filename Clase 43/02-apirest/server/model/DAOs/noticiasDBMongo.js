const mongodb = require("mongodb");
const noticiaDTO = require("../DTOs/noticias.js");
const NoticiasBaseDAO = require("./noticiasBaseDao.js");

const { MongoClient, ObjectId } = mongodb;

class NoticiasDBMongoDAO extends NoticiasBaseDAO {
  constructor(database, collection) {
    super();

    (async () => {
      console.log("Contectando a la Base de datos...");

      const connection = await MongoClient.connect("mongodb://localhost", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const db = connection.db(database);
      this.collection = db.collection(collection);

      console.log("Base de datos conectada");
    })();
  }

  obtenerNoticias = async (_id) => {
    try {
      if (_id) {
        console.log(_id);

        const noticia = await this.collection.findOne({
          _id: ObjectId(_id),
        });

        console.log(noticia);

        return [noticia];
      }

      const noticias = await this.collection.find({}).toArray();

      return noticias;
    } catch (error) {
      return console.log("obtenerNoticias error", error);
    }
  };

  guardarNoticia = async (noticia) => {
    try {
      await this.collection.insertOne(noticia);

      return noticia;
    } catch (error) {
      console.log("guardarNoticia error", error);

      return noticia;
    }
  };

  actualizarNoticia = async (_id, noticia) => {
    try {
      await this.collection.updateOne(
        {
          _id: ObjectId(_id),
        },
        {
          $set: noticia,
        }
      );

      return noticia;
    } catch (error) {
      console.log("actualizarNoticia error", error);

      return noticia;
    }
  };

  borrarNoticia = async (_id) => {
    const noticiaBorrada = noticiaDTO({}, _id, null);

    try {
      await this.collection.deleteOne({
        _id: ObjectId(_id),
      });

      return noticiaBorrada;
    } catch (error) {
      console.log("borrarNoticia error", error);

      return noticiaBorrada;
    }
  };
}

module.exports = NoticiasDBMongoDAO;
