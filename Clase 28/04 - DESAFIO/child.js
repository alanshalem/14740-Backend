let suma = 0;
for (let index = 0; index < 5e9; index += 1) {
  suma += 1;
}

process.send(suma);
