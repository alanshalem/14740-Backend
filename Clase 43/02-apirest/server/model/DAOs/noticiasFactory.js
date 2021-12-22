const NoticiasMemDAO = require("./noticiasMem.js");
const NoticiasFileDAO = require("./noticiasFile.js");
const NoticiasDBMongo = require("./noticiasDBMongo.js");

class NoticiasFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "MEM":
        return new NoticiasMemDAO();
      case "FILE":
        return new NoticiasFileDAO(`${process.cwd()}/noticias.json`);
      case "MONGO":
        return new NoticiasDBMongo("mibase", "noticias");
      default:
        return new NoticiasMemDAO();
    }
  }
}

module.exports = NoticiasFactoryDAO;
