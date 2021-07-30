const anonima = function (a, b) {
  const c = a + b;
  const d = c ** 2;
  return d;
};

console.log(anonima(2, 5));

const anonima2 = function (value) {
  console.log(value ** 3);
};

[1, 2, 3, -5].forEach(anonima2);
