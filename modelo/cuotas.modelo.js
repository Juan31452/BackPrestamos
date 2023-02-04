const mongoose = require('mongoose');
const Prestamo = require("../modelo/prestamo.modelo");
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
      type: Schema.Types.ObjectId,
      ref: 'prestamo',
      required: true
        
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