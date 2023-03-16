const express = require('express');

const router = express.Router();
const UsuariosControl = require("../controlador/usuario.control");

router.post("/",UsuariosControl.create);
router.get("/",UsuariosControl.find);
router.post("/login",UsuariosControl.login)
module.exports = router;
