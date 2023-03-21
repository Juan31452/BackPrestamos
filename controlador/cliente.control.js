const Clientes = require('../modelo/clientes.modelo');
const usuario = require("../modelo/usuario.modelo");

let response ={
    msg:"",
    exito:false
}

exports.create = async (req, res, next) => {
    try {
      const { nombres, apellidos,correo,cedula,direccion,usuario   } = req.body;
      const cliente = new Clientes({ nombres, apellidos,correo,cedula,direccion, usuario });
      await cliente.save();
      res.status(201).json({ message: 'Cliente creado con exito' });
    } catch (error) {
      next(error);
    }
  };

// Obtener todos los clientes

exports.find = function(req,res)
{
    Clientes.find(function(err,cliente){
        res.json(cliente)
    })
}

// Buscar clientes por id
exports.findOne = function(req,res)
{
    Clientes.findOne({_id : req.params.id},function(err,cliente){
        res.json(cliente)
    })
}

//Buscar clientes por usuario
exports.BuscarPorUsuario = async (req,res) => 
{
    const usuario = req.params.usuario;
    const query = { usuario: req.params.usuario };
    const cliente = await Clientes.find(query);
   
        res.json(cliente);
  
}

// Buscar clientes por nombre
exports.buscarPorNombre = async (req, res) => {
   
      const nombres = req.params.nombres;
      console.log(nombres);
      
      const regex = new RegExp(nombres, 'i');

      
      if (typeof nombres !== 'string') {
        throw new Error('El valor de búsqueda debe ser una cadena de texto');
      }  

      const query = { nombres: { $regex: regex } };
      const cliente = await Clientes.find(query);
      res.json(cliente);
     
  
  };

exports.update = function(req,res)
{
    let cliente = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        cedula: req.body.cedula,
        direccion: req.body.direccion
   
    }

    Clientes.findByIdAndUpdate(req.params.id,{$set :cliente},
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
    Clientes.remove({_id : req.params.id},function(err){
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