const singleton = require("./singleton");

const singleton1 = singleton.getInstance();
const singleton2 = singleton.getInstance();

singleton1.printValue();
singleton2.printValue();

console.log(singleton1 === singleton2);
