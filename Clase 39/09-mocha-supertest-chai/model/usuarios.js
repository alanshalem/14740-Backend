const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
});

const Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = {
  Usuario,
};
