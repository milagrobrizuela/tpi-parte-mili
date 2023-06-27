const express = require('express')
const router = express.Router();
const AeropuertosController = require('../controllers/AeropuertoControllers.js');

router.get('/', AeropuertosController.get);
router.get('/:id', AeropuertosController.getById);
router.post('/', AeropuertosController.post);
router.put('/:id', AeropuertosController.put);
router.delete('/:id', AeropuertosController.delete);

module.exports = router;
