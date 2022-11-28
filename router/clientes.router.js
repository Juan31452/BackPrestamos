const express = require("express");
const router = express.Router();
const ClientesControl = require("../controlador/cliente.control");

router.post("/",ClientesControl.create);
router.get("/",ClientesControl.find);

module.exports = router;
