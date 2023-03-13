const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  interes: {
    type: Number,
    required: true,
  },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
