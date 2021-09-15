const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./DB/mydb.sqlite",
  },
  useNullAsDefault: true,
});

(async () => {
  try {
    const tableName = "articulos";
    if (await knex.schema.hasTable(tableName)) {
      await knex.schema.dropTable(tableName);
    }

    await knex.schema.createTable(tableName, (table) => {
      table.string("nombre", 15).notNullable();
      table.string("codigo", 10).notNullable();
      table.float("precio");
      table.integer("stock");
      table.increments();
    });

    console.log("Tabla creada");

    await knex(tableName).insert([
      {
        nombre: "algo",
        codigo: "aaaa",
        precio: 15,
        stock: 5,
      },
      {
        nombre: "algo2",
        codigo: "bbbb",
        precio: 18,
        stock: 54,
      },
      {
        nombre: "algo3",
        codigo: "cccc",
        precio: 10,
        stock: 25,
      },
      {
        nombre: "algo4",
        codigo: "dddd",
        precio: 4,
        stock: 45,
      },
      {
        nombre: "algo5",
        codigo: "eeee",
        precio: 32,
        stock: 31,
      },
    ]);

    console.log("Articulos insertados");

    let articulos = await knex.from(tableName).select("*");
    for (const articulo of articulos) {
      console.log(
        `${articulo["id"]} ${articulo["nombre"]} ${articulo["codigo"]} ${articulo["precio"]} ${articulo["stock"]}`
      );
    }

    await knex.from(tableName).where("id", "=", "3").del();

    console.log("Articulo eliminado");

    await knex.from(tableName).where("id", "=", "2").update("stock", 0);

    console.log("Articulo actualizado");

    articulos = await knex.from(tableName).select("*");
    for (const articulo of articulos) {
      console.log(
        `${articulo["id"]} ${articulo["nombre"]} ${articulo["codigo"]} ${articulo["precio"]} ${articulo["stock"]}`
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
})();
