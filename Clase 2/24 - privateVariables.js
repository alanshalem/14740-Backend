class Ejemplo {
  #bitcoin = "1000000";

  getBitcoin = () => {
    return this.#bitcoin;
  };
}

const ejemplo = new Ejemplo();
console.log(ejemplo.getBitcoin());
console.log(ejemplo.#bitcoin);
