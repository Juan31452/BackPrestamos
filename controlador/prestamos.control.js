const Prestamo = require("../modelo/prestamo.modelo");
let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res)
{
    let prestamo = new Prestamo({
        fecha: req.body.fecha,
        valor_prestamo: req.body.valor_prestamo,
        interes: req.body.interes,
        cuota: req.body.cuota,
        cliente: req.body.cliente,
        usuario: req.body.usuario,
        fotocopia: req.body.fotocopia,
        letra: req.body.letra,
        debe: req.body.debe
        
        
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

exports.findOne = function(req,res)
{
    Prestamo.findOne({_id : req.params.id},function(err,prestamo){
        res.json(prestamo)
    })
}

//Buscar prestamos por usuario
exports.BuscarPorUsuario = async (req,res) => 
{
    const usuario = req.params.usuario;
    const query = { usuario: req.params.usuario };
    const prestamo = await Prestamo.find(query);
   
        res.json(prestamo);
  
}



exports.buscarCliente = async function(req,res)
{
        Prestamo.find({cliente : req.params.cliente},function(err,prestamo){
            if (err) {
                res.status(400).send(err);
            } else {    
              res.json(prestamo);
            }
    });    
    
}

// Buscar clientes por nombre
exports.buscarPorNombre = async (req, res) => {
   
    const cliente = req.params.cliente;
    console.log(cliente);
    
    const regex = new RegExp(cliente, 'i');

    
    if (typeof cliente !== 'string') {
      throw new Error('El valor de búsqueda debe ser una cadena de texto');
    }  

    const query = { cliente: { $regex: regex } };
    const prestamos = await Prestamo.find(query);
    res.json(prestamos);
   

};

exports.update = async function(req,res)
{
    let prestamo = {
        fecha: req.body.fecha,
        valor_prestamo: req.body.valor_prestamo,
        interes: req.body.interes,
        cuota: req.body.cuota,
        cliente: req.body.cliente,
        fotocopia: req.body.fotocopia,
        letra: req.body.letra,
        debe: req.body.debe
        
        
    }

    Prestamo.findByIdAndUpdate(req.params.id,{$set :prestamo},
        function(err){
        if(err)
        {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Modificar"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Modificado con Exito"
        res.json(response)
           
    })
    
}    

exports.remove = function(req,res)
{
    Prestamo.remove({_id : req.params.id},function(err){
        if(err)
        {
           console.error(err),
           response.exito = false,
           response.msg = "Error al intentar Eliminar"
           res.json(response)
           return;
        }
    
        response.exito = true,
        response.msg = "Eliminado con Exito"
        res.json(response)
               
    })
    
}

exports.updatedebe = async (req, res) => {
    try {
        Prestamo.findByIdAndUpdate(req.params.id, { $inc: { debe: req.body.debe } }, { new: true });
  
      res.json(account);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };