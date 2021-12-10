let instance = null;

class Singleton {
  constructor() {
    this.value = new Date();
  }

  obtenerHora() {
    return this.value;
  }

  static getInstance() {
    if (!instance) {
      instance = new Singleton();
    }

    return instance;
  }
}

module.exports = Singleton;
