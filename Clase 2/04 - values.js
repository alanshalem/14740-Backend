const bitcoin = {
  value: 100000,
  maxHist: 200000,
  minHist: 0.001,
  getValue: function () {
    return value;
  },
};

console.log(Object.values(bitcoinArray));

const ejemplo = Object.values(bitcoinArray).filter((value) => value > 50);
console.log(ejemplo);

console.log(Object.values("hola"));
