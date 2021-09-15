const { options } = require("./options/SQLite3");
const knex = require("knex")(options);

const cars = [
  {
    name: "Audi",
    price: 52642,
  },
  {
    name: "Mercedes",
    price: 57127,
  },
];

knex("cars")
  .insert(cars)
  .then(() => console.log("Data inserted"))
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    knex.destroy();
  });
