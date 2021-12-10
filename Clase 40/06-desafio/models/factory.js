const File = require("./file");
const Memory = require("./memory");

class Factory {
  static getDao(type) {
    switch (type) {
      case "mem":
        return new Memory();
      case "file":
        return new File();
      default:
        return null;
    }
  }
}

module.exports = Factory.getDao(process.argv[3] || "mem");
