const mongoose = require('mongoose');

Schema = mongoose.Schema;

var micliente = new Schema
({
    nombres:
    {
        type: String,
        require: true,
        max:40, 
        index : true
    },
    apellidos:
    {
        type: String,
        require: true ,
        max:40
    },
    correo:
    {
        type: String,
        require: true ,
        max:20
    },
    cedula:
    {
        type: String,
        require: true ,
        max:15
    },
    direccion:
    {
        type: String,
        require: true ,
        max:20
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
      },

                
});

module.exports = mongoose.model('cliente',micliente);