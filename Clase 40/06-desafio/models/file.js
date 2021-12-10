const fs = require("fs");

class File {
  constructor() {
    this.file = "./data/data.json";
    this.data = [];
  }

  set(data) {
    return new Promise((resolve) => {
      this.data.push(data);

      fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2));

      return resolve();
    });
  }

  get() {
    return new Promise((resolve) =>
      resolve(JSON.parse(fs.readFileSync(this.file, "utf-8")))
    );
  }
}

module.exports = File;
