const Usuario = require("../modelo/usuario.modelo");

let response ={
    msg:"",
    exito:false
}

//guardar datos
exports.create = function(req,res)
{

    let usuario = new Usuario({
        email: req.body.email,
        password: req.body.password,
        interes: req.body.interes,
        
    })
    usuario.save(function(err)
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

// Obtener todos los usuarios
exports.find = async (req, res) => {
   
      const usuario = await Usuario.find();
      res.json(usuario);
 
  };

  //Buscar por email y password
  exports.login = function(req,res,next)
{
    Usuario.findOne({email : req.body.email,password : req.body.password},function(err,usuarios){
        res.json(usuarios)
    })
}

// Buscar usuario por id
exports.findOne = function(req,res)
{
    Usuario.findOne({_id : req.params.id},function(err,usuario){
        res.json(usuario)
    })
}

//Modificar datos
exports.update = function(req,res)
{
    let usuario = {
        email: req.body.email,
        password: req.body.password,
        interes: req.body.interes,
        
    }

    Usuario.findByIdAndUpdate(req.params.id,{$set :usuario},
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
