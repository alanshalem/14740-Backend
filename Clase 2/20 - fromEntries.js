const bitcoinArray = [
  ["value", 100000],
  ["maxHist", 200000],
  ["minHist", 0.001],
  [
    "getValue",
    function () {
      return "hola";
    },
  ],
];

console.log(bitcoinArray);

const bitcoinObject = Object.fromEntries(bitcoinArray);
console.log(bitcoinObject);
console.log(bitcoinObject.getValue());
