const values = [1, 2, 3, 4, 5, 6, [7, 8, 9], [10, 11, [12, 13, [14]]]];

console.log(values.flat());
console.log(values.flat(2));
console.log(values.flat(3));
