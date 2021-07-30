const valores = ["hola", "chau", true, 123];

console.log(valores.includes("chau"));
console.log(valores.includes("chAu"));
console.log(valores.includes("chau", 2));
console.log(valores.includes("chau", 456));
console.log(valores.includes("chau", -2));
console.log(valores.includes(true, -2));
console.log(valores.includes(123, -4156));
