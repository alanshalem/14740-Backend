const faker = require("faker");

const get = () => ({
  nombre: faker.name.firstName(),
  email: faker.internet.email(),
});

module.exports = {
  get,
};
