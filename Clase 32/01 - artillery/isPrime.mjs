const isPrime = (number) => {
  if ([2, 3].indexOf(number) >= 0) {
    return true;
  }

  if ([2, 3].some((element) => number % element === 0)) {
    return false;
  }

  let i = 5;
  let w = 2;
  while (i * i <= number) {
    if (number % i === 0) {
      return false;
    }

    i += w;
    w = 6 - w;
  }

  return true;
};

export default isPrime;
