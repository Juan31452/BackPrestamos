const mongoose = require('mongoose');
Schema = mongoose.Schema;

var miprestamo = new Schema
({
    fecha:
    {
        type: String,
        require: true,
        max:40 
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
        type: Number,
        require: true 
        
    },
    pagado:
    {
        type: String,
        require: true,
        max:3 
    },
              
});

module.exports = mongoose.model('prestamo',miprestamo);