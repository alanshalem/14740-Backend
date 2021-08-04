const min = 1;
const max = 20;
let number;
let object = {};

for (let index = 0; index < 10000; index++) {
  number = Math.floor(min + Math.random() * (max - min + 1));
  if (object[number] === undefined) {
    object[number] = 1;
    continue;
  }

  object[number]++;
}

console.log(object);
