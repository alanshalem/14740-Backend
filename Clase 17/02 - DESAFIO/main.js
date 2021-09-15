const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "ecommerce",
  },
});

const tableName = "articulos";

(() => {
  knex.schema.hasTable(tableName).then((exists) => {
    if (exists) {
      knex.schema.dropTable(tableName).then(() => {
        doExercise();
      });

      return;
    }

    doExercise();
  });
})();

const doExercise = () => {
  knex.schema
    .createTable(tableName, (table) => {
      table.string("nombre", 15).notNullable();
      table.string("codigo", 10).notNullable();
      table.float("precio");
      table.integer("stock");
      table.increments("id", { primaryKey: true }).notNullable();
    })
    .then(() => {
      console.log("Tabla creada");

      knex(tableName)
        .insert([
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
        ])
        .then(() => {
          console.log("Articulos insertados");

          knex
            .from(tableName)
            .select("*")
            .then((articulos) => {
              for (const articulo of articulos) {
                console.log(
                  `${articulo["id"]} ${articulo["nombre"]} ${articulo["codigo"]} ${articulo["precio"]} ${articulo["stock"]}`
                );
              }

              knex
                .from(tableName)
                .where("id", "=", "3")
                .del()
                .then(() => {
                  console.log("Articulo eliminado");
                  knex
                    .from(tableName)
                    .where("id", "=", "2")
                    .update("stock", 0)
                    .then(() => {
                      console.log("Articulo actualizado");

                      knex
                        .from(tableName)
                        .select("*")
                        .then((articulos) => {
                          for (const articulo of articulos) {
                            console.log(
                              `${articulo["id"]} ${articulo["nombre"]} ${articulo["codigo"]} ${articulo["precio"]} ${articulo["stock"]}`
                            );
                          }
                        })
                        .catch((error) => {
                          console.log("Error", error);

                          throw error;
                        })
                        .finally(() => {
                          knex.destroy();
                        });
                    });
                });
            });
        });
    });
};
