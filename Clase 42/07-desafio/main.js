const operaciones = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

// #region process.env

console.log(operaciones[process.env.OP](+process.env.N1, +process.env.N2));

// #endregion
