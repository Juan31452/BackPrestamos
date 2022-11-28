const Clientes = require("../modelo/clientes.modelo");
let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res)
{
    let cliente = new Clientes({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        cedula: req.body.cedula,
        direccion: req.body.direccion,
        fotocopia: req.body.fotocopia,
        letra: req.body.agremiacion
        
    })
    cliente.save(function(err)
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
    Clientes.find(function(err,cliente){
        res.json(cliente)
    })
}

