const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productosSchema = new Schema({
  codigo: {
    type: String,
    trim: true,
  },
  nombre: {
    type: String,
    trim: true,
  },
  precio: {
    type: Number,
  },
  tarifa: {
    type: Number,
  },
  imagen: {
    type: String,
  },
});
module.exports = mongoose.model("Productos", productosSchema);
