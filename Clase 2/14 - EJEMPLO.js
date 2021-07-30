const sumatoria = function (...elements) {
  let resultado = 0;
  for (let element of elements) {
    resultado += element;
  }

  return [resultado];
};

const resultados = {
  resultado1: sumatoria(1, 2),
  resultado2: sumatoria(3, 4),
  resultado3: sumatoria(5, 6),
};

const { resultado1, resultado2, resultado3 } = resultados;

console.log(`${resultado1}
${resultado2}
${resultado3}`);
