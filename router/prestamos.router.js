const express = require("express");
const router = express.Router();
const PrestamoControl = require("../controlador/prestamos.control");

router.post("/",PrestamoControl.create);
router.get("/",PrestamoControl.find);
router.get("/:id",PrestamoControl.findOne);
router.put("/:id",PrestamoControl.update);
router.put("/:id",PrestamoControl.updatedebe);
router.delete("/:id",PrestamoControl.remove);
router.get("/buscarPorUsuario/:usuario",PrestamoControl.BuscarPorUsuario);
router.get("/cliente/:cliente",PrestamoControl.buscarCliente);
router.get("/buscarPorNombre/:cliente",PrestamoControl.buscarPorNombre); 

module.exports = router;