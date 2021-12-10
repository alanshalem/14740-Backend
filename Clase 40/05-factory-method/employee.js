class Employee {
  constructor(type) {
    this.type = type;
  }

  speak() {
    return `Hi, I'm a ${this.type} employee`;
  }
}

module.exports = Employee;
