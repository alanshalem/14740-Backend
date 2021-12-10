const EmployeeFactory = require("./myemployeefactory");

(() => {
  const types = ["fulltime", "parttime", "contractor"];
  const employees = [];

  for (let index = 0; index < 100; index += 1) {
    employees.push(
      EmployeeFactory.createEmployee({
        type: types[Math.floor(Math.random() * 3)],
      })
    );
  }

  employees.forEach((employee) => {
    console.log(employee.speak());
  });
})();
