import mongoose from "mongoose";
import { model } from "./models/estudiantes.mjs";

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/colegio");
    console.log("Base de datos conectada");

    console.log(
      "DNI LUCAS",
      await model.update(
        { nombre: "Lucas", apellido: "Blanco" },
        { $set: { dni: 20355875 } }
      )
    );

    console.log(
      "INGRESO FALSE",
      await model.update({}, { $set: { ingreso: false } }, { multi: true })
    );

    console.log(
      "INGRESO TRUE 1A",
      await model.update(
        { curso: "1A" },
        { $set: { ingreso: true } },
        { multi: true }
      )
    );

    console.log(
      "NOTA > 4",
      await model.find({ nota: { $gte: 4 } }, { _id: 0, __v: 0 })
    );

    console.log(
      "INGRESO TRUE",
      await model.find({ ingreso: true }, { _id: 0, __v: 0 })
    );

    console.log(
      "BORRAR INGRESO TRUE",
      await model.deleteMany({ ingreso: true })
    );

    console.log("PUNTO 7");
    const estudiantes = await model.find({}, { __v: 0 });
    for (const estudiante of estudiantes) {
      console.log(
        `${estudiante} --> ${estudiante._id
          .getTimestamp()
          .toLocaleString("es-AR")}`
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
    console.log("Base de datos desconectada");
  }
})();
