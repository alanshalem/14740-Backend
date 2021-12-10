const Employee = require("./employee");

class ContractorEmployee extends Employee {
  constructor() {
    super("contractor");
  }
}

module.exports = ContractorEmployee;
