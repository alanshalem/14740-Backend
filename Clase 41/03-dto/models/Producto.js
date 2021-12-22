const mongoose = require("mongoose");
const Config = require("../config.js");

const { Schema } = mongoose;

const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const ProductoModel = mongoose.model(Config.db.collection, ProductoSchema);

module.exports = ProductoModel;
