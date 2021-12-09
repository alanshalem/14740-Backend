const Todos = require("./todos");

const todos = new Todos();
console.log(todos);

todos.add("run code");
console.log(todos.list());

todos.add("otra tarea");
console.log(todos.list());

todos.complete("run code");
console.log(todos.list());
