const minimist = require("minimist");

const operaciones = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

// #region process.argv

const argv = process.argv.slice(2);

try {
  console.log(operaciones[argv[0]](+argv[1], +argv[2]));
} catch (error) {
  console.log("Operacion no soportada");
}

// #endregion

// #region minimist

const minimistArgs = minimist(process.argv.slice(2));

try {
  console.log(operaciones[minimistArgs.op](+minimistArgs.n1, +minimistArgs.n2));
} catch (error) {
  console.log("Operacion minimist no soportada");
}

// #endregion
