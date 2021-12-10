class Memory {
  constructor() {
    this.data = [];
  }

  set(data) {
    return new Promise((resolve) => {
      this.data.push(data);

      return resolve();
    });
  }

  get() {
    return new Promise((resolve) => resolve(this.data));
  }
}

module.exports = Memory;
