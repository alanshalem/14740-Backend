let values = [1, 2, 3, 4];

console.log(values.map((value) => [value, value ** 2]));
console.log(values.flatMap((value) => [value, value ** 2]));

values = ["Juan Perez", "Jose Rodriguez"];
console.log(values.map((value) => value.split(" ")));
console.log(values.flatMap((value) => value.split(" ")));
