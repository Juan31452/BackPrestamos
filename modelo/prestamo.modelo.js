const mongoose = require('mongoose');
Schema = mongoose.Schema;

var miprestamo = new Schema
({
    fecha:
    {
        type: String,
        require: true,
        max:20 
    },
    valor_prestamo:
    {
        type: Number,
        require: true 
        
    },
    interes:
    {
        type: Number,
        require: true 
        
    },
    cuota:
    {
        type: Number,
        require: true 
        
    },
    cliente:
    {
        type: String,
        require: true, 
        max:40
    },

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
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
    debe:
    {
        type: Number,
        require: true
    },
              
});

module.exports = mongoose.model('prestamo',miprestamo);