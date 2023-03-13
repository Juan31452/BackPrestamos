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

// Obtener todos los clientes
exports.find = async (req, res) => {
   
      const usuario = await Usuario.find();
      res.json(usuario);
 
  };
