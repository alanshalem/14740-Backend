const matches = "Hola bitcoin chau bitcoan algo bitcoen".matchAll(/bit(co.n)/g);

for (const match of matches) {
  console.log(match);
}
