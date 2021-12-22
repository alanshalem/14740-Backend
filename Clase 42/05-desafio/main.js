const yargs = require("yargs");

const operaciones = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

// #region yargs

const { argv } = yargs;

console.log(operaciones[argv.op](argv.n1, argv.n2));

// #endregion
