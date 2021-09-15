const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

knex
  .from("cars")
  .select("*")
  .then((rows) => {
    for (const row of rows) {
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);
    }
  })
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    knex.destroy();
  });
