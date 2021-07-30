const arrays = ["6**2", "**", "3**3", "4**", "4**5", "8**2", "4*=5"];

potenciacion = (operacionString) => {
  if (!operacionString.includes("**")) {
    return null;
  }

  const operacionArray = operacionString.split("");
  const element1 = operacionArray[0];
  if (isNaN(element1)) {
    return null;
  }

  const element2 = operacionArray[operacionArray.length - 1];
  if (isNaN(element2)) {
    return null;
  }

  return element1 ** element2;
};

for (let array of arrays) {
  console.log("Operación: " + array + " --> Resultado: " + potenciacion(array));
}
