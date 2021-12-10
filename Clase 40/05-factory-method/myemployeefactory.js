const FullTimeEmployee = require("./fulltimeemployee");
const PartTimeEmployee = require("./parttimeemployee");
const ContractorEmployee = require("./contractoremployee");

class MyEmployeeFactory {
  static createEmployee(data) {
    switch (data.type) {
      case "fulltime":
        return new FullTimeEmployee();
      case "parttime":
        return new PartTimeEmployee();
      case "contractor":
        return new ContractorEmployee();
      default:
        return null;
    }
  }
}

module.exports = MyEmployeeFactory;
