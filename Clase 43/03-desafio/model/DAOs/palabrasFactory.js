const PalabrasMemDAO = require("./palabrasMem.js");

class PalabrasFactoryDAO {
  static get() {
    return new PalabrasMemDAO();
  }
}

module.exports = PalabrasFactoryDAO;
