import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
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
  dni: {
    type: String,
    require: true,
    unique: true,
  },
});

export const usuarios = mongoose.model("usuarios", usuariosSchema);
