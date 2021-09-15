const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

knex
  .from("cars")
  .del()
  .then(() => {
    console.log("All cars deleted");
  })
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    knex.destroy();
  });
