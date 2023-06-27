const express = require("express");
const PilotosControllers = require("../Controllers/pilotos.controllers.js");

const router = express.Router();

router.get("/getAll", PilotosControllers.get);
router.get("/getById/:id", PilotosControllers.getById);
router.get("/getByNacionalidad", PilotosControllers.getByNacionalidad);
router.post("", PilotosControllers.post);
router.put("/:id", PilotosControllers.put);
router.delete("/:id", PilotosControllers.delete);

module.exports = router;
