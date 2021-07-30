const valores = [true, 5, false, "hola", "adios", 2];

const functionA = (array) => {
  let result = "";
  for (const value of array) {
    if (typeof value === "string" && value.length > result.length) {
      result = value;
    }
  }

  return result;
};

const functionB = (array) => array.indexOf(false);

const functionC = (array, operation) => {
  const numberArray = array.filter((element) => typeof element === "number");
  const operations = {
    suma: numberArray[0] + numberArray[1],
    resta: numberArray[0] - numberArray[1],
    mult: numberArray[0] * numberArray[1],
    div: numberArray[0] / numberArray[1],
  };

  return operations[operation] ? operations[operation] : "Operación invalida";
};

console.log(`${functionA(valores)}
${functionB(valores)}
${functionC(valores, "suma")}`);
