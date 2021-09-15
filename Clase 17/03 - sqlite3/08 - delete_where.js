const { options } = require("./options/SQLite3");
const knex = require("knex")(options);

knex
  .from("cars")
  .where("price", ">", "53000")
  .del()
  .then(() => {
    console.log("Cars deleted");
  })
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    knex.destroy();
  });
