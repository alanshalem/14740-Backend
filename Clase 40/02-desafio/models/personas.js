const personas = [];

module.exports = {
  get: () => new Promise((resolve) => resolve(personas)),
  set: (persona) =>
    new Promise((resolve) => {
      personas.push(persona);
      return resolve();
    }),
};
