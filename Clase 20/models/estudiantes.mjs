import mongoose from "mongoose";

const estudianteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    max: 100,
  },
  apellido: {
    type: String,
    require: true,
    max: 100,
  },
  edad: {
    type: Number,
    require: true,
  },
  dni: {
    type: String,
    require: true,
    unique: true,
  },
  curso: {
    type: String,
    require: true,
    max: 100,
  },
  nota: {
    type: Number,
    require: true,
  },
  ingreso: {
    type: Boolean,
    require: false,
  },
});

export const model = mongoose.model("estudiantes", estudianteSchema);
