const Employee = require("./employee");

class FullTimeEmployee extends Employee {
  constructor() {
    super("full time");
  }
}

module.exports = FullTimeEmployee;
