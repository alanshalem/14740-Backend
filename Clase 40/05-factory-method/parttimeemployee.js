const Employee = require("./employee");

class PartTimeEmployee extends Employee {
  constructor() {
    super("part time");
  }
}

module.exports = PartTimeEmployee;
