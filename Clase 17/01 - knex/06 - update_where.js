const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

knex
  .from("cars")
  .where("price", "52642")
  .update("price", "40000")
  .then(() => {
    console.log("Car updated");
  })
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    knex.destroy();
  });
