const mongoose = require('mongoose');
Schema = mongoose.Schema;

var micuota = new Schema
({
    fecha:
    {
        type: String,
        require: true,
        max:20 
    },
    prestamo:
    {
        type: String,
        require: true ,
        max: 50
        
    },
    cuota:
    {
        type: Number,
        require: true 
        
    },
    interes:
    {
        type: Number,
        require: true 
        
    },
    
    abono_capital:
    {
        type: Number,
        require: true 
        
    },
    saldo:
    {
        type: Number,
        require: true 
        
    },
              
});

module.exports = mongoose.model('cuota',micuota);