const express = require("express");
const router = express.Router();
const CuotasControl = require("../controlador/cuotas.control");

router.post("/",CuotasControl.create);
router.get("/",CuotasControl.find);
router.get("/buscarprestamo/:prestamo",CuotasControl.buscarprestamo);
module.exports = router;
