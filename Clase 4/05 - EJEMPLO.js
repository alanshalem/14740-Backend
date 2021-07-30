Promise.resolve(20)
  .then((x) => x + 1)
  .then((x) => x * 2)
  .then((x) => {
    if (x == 22) {
      throw "Error";
    } else {
      return 80;
    }
  })
  .then(() => 30)
  .then((x) => x / 2)
  .then((x) => console.log(x))
  .catch((x) => console.log(x));
