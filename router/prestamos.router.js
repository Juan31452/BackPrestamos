const express = require("express");
const router = express.Router();
const PrestamoControl = require("../controlador/prestamos.control");

router.post("/",PrestamoControl.create);
router.get("/",PrestamoControl.find);

module.exports = router;