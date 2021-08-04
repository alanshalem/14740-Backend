let productos = [
  {
    id: 1,
    nombre: "Escuadra",
    precio: 323.45,
  },
  {
    id: 2,
    nombre: "Calculadora",
    precio: 234.56,
  },
  {
    id: 3,
    nombre: "Globo Terráqueo",
    precio: 45.67,
  },
  {
    id: 4,
    nombre: "Paleta Pintura",
    precio: 456.78,
  },
  {
    id: 5,
    nombre: "Reloj",
    precio: 67.89,
  },
  {
    id: 6,
    nombre: "Agenda",
    precio: 78.9,
  },
];

let total = 0;
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

for (const value of productos) {
  total += value.precio;
  min = value.precio < min ? value.precio : min;
  max = value.precio > max ? value.precio : max;
}

console.log({
  Productos: productos.map((value) => value.nombre).join(", "),
  Total: `${total.toFixed(2)}`,
  Promedio: `${(total / productos.length).toFixed(2)}`,
  Minimo: `${min.toFixed(2)}`,
  Maximo: `${max.toFixed(2)}`,
});
