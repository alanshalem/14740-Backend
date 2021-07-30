function* ejemplo() {
  const min = 5;
  const max = 15;
  let orden = 0;
  let date;
  let number;

  while (true) {
    date = Date.now();
    number = min + Math.random() * (max - min);

    yield { orden: orden++, numero: number, fyh: date };
  }
}

const iterador = ejemplo();
for (let index = 0; index < 10; index++) {
  console.log(iterador.next().value);
}
