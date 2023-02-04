const Cuotas = require("../modelo/cuotas.modelo");
const Prestamo = require("../modelo/prestamo.modelo");

let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res)
{
    let lacuota = new Cuotas({
        fecha: req.body.fecha,
        prestamo: req.body.prestamo,
        interes: req.body.interes,
        abono_capital: req.body.abono_capital,
        saldo: req.body.saldo
        
    })
    lacuota.save(function(err)
    {
       if(err)
       {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Guardar"
            res.json(response)
            return;
       }

            response.exito = true,
            response.msg = "Guardado con Exito"
            res.json(response)
    });
               
}

exports.find = function(req,res)
{
    Cuotas.find(function(err,lacuota){
        res.json(lacuota)
    })
}

