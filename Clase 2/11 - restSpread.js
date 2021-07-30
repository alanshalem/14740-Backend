const bitcoin = {
  value: 100000,
  marketCap: 10 ** 5,
  maxHist: 200000,
  minHist: 0.001,
};

const { value, maxHist, ...otrasCosas } = bitcoin;
console.log(value, maxHist, otrasCosas);

const dogeCoin = { value, maxHist, ...otrasCosas };
console.log(dogeCoin);

const ether = {
  ...bitcoin,
  maxHist: 150000,
  useSmartContracts: true,
};

console.log(ether);
