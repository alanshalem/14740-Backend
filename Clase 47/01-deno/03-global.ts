console.log(Deno);

const encoder = new TextEncoder();
const data = encoder.encode("Hello World!");

await Deno.writeFile("03-global.txt", data);

console.log(Deno.args);
