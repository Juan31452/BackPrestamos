const mongoose = require('mongoose');
Schema = mongoose.Schema;

var micliente = new Schema
({
    nombres:
    {
        type: String,
        require: true,
        max:40 
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
    fotocopia:
    {
        type: String,
        require: true ,
        max:2
    },
    letra:
    {
        type: String,
        require: true ,
        max:2
    },
            
    
});

module.exports = mongoose.model('cliente',micliente);