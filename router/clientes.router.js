const express = require('express');

const router = express.Router();
const ClientesControl = require("../controlador/cliente.control");

router.post("/",ClientesControl.create);
router.get("/",ClientesControl.find);
router.get("/:id",ClientesControl.findOne);
router.put("/:id",ClientesControl.update);
router.delete("/:id",ClientesControl.remove);
router.get("/buscarPorNombre/:nombres",ClientesControl.buscarPorNombre); 

module.exports = router;
