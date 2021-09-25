const mongoose = require("mongoose");
const model = require("./models/estudiantes.js");

mongoose.connect("mongodb://localhost:27017/colegio").then(() => {
  console.log("Base de datos conectada");

  model.estudiantes
    .find()
    .sort({ nombre: 1 })
    .then((docs) => {
      console.log("ORDEN ALFABETICO POR NOMBRE", docs);

      model.estudiantes
        .find()
        .sort({ edad: 1 })
        .limit(1)
        .then((docs) => {
          console.log("MAS JOVEN", docs);

          model.estudiantes.find({ curso: "2A" }).then((docs) => {
            console.log("CURSO 2A", docs);

            model.estudiantes
              .find()
              .sort({ edad: 1 })
              .skip(1)
              .limit(1)
              .then((docs) => {
                console.log("2do MAS JOVEN", docs);

                model.estudiantes
                  .find({}, { _id: 0, nombre: 1, apellido: 1, curso: 1 })
                  .sort({ apellido: -1 })
                  .then((docs) => {
                    console.log("NOMBRES Y APELLIDOS", docs);

                    model.estudiantes.find({ nota: 10 }).then((docs) => {
                      console.log("NOTA 10", docs);

                      model.estudiantes
                        .aggregate([
                          {
                            $group: {
                              _id: null,
                              promedio: { $avg: "$nota" },
                            },
                          },
                        ])
                        .then((docs) => {
                          console.log("PROMEDIO", docs);

                          model.estudiantes
                            .aggregate([
                              {
                                $match: { curso: "1A" },
                              },
                              {
                                $group: {
                                  _id: null,
                                  promedio: { $avg: "$nota" },
                                },
                              },
                            ])
                            .then((docs) => {
                              console.log("PROMEDIO 1A", docs);
                            })
                            .catch((error) => {
                              console.log(error);
                            })
                            .finally(() => {
                              mongoose.disconnect().then(() => {
                                console.log("Base de datos desconectada");
                              });
                            });
                        });
                    });
                  });
              });
          });
        });
    });
});
