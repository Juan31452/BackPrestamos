const express = require("express");
const router = express.Router();
const PrestamoControl = require("../controlador/prestamos.control");

router.post("/",PrestamoControl.create);
router.get("/",PrestamoControl.find);
router.get("/:id",PrestamoControl.findOne);
router.put("/:id",PrestamoControl.update);
router.delete("/:id",PrestamoControl.remove);


module.exports = router;