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

(async () => {
  try {
    console.log("--> Borramos todos los autos");
    await knex("cars").del();

    console.log("--> Insertamos autos");
    await knex("cars").insert(cars);

    console.log("--> Leemos todos los autos");
    let rows = await knex.from("cars").select("*");
    for (const row of rows) {
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);
    }

    console.log("--> Insertamos un auto mas");
    await knex("cars").insert({
      name: "Fiat",
      price: 7777,
    });

    console.log("--> Leemos los autos actualizados");
    rows = await knex.from("cars").select("*");
    for (const row of rows) {
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);
    }
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
})();
