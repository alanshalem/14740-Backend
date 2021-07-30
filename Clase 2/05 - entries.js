const bitcoin = {
  value: 100000,
  maxHist: 200000,
  minHist: 0.001,
  getValue: function () {
    return value;
  },
};

console.log(Object.entries(bitcoin));

const ejemplo = Object.entries(bitcoin).map((value) => [
  value[0],
  value[1] ** 2,
]);
console.log(ejemplo);

console.log(Object.entries("hola"));
