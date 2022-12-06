const Prestamo = require("../modelo/prestamo.modelo");
let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res)
{
    let prestamo = new Clientes({
        fecha: req.body.fecha,
        valor_prestamo: req.body.valor_prestamo,
        interes: req.body.interes,
        cuota: req.body.cuota,
        cliente: req.body.cliente,
        pagado: req.body.pagado
        
        
    })
    prestamo.save(function(err)
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
    })              
}

exports.find = function(req,res)
{
    Prestamo.find(function(err,prestamo){
        res.json(prestamo)
    })
}
