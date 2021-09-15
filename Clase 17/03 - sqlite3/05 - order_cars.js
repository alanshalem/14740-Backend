const { options } = require("./options/SQLite3");
const knex = require("knex")(options);

knex
  .from("cars")
  .select("name", "price")
  .orderBy("price", "desc")
  .then((rows) => {
    for (const row of rows) {
      console.log(`${row["name"]} ${row["price"]}`);
    }
  })
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    knex.destroy();
  });
