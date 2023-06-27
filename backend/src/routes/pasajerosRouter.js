
const express = require('express')
const pasajerosController = require('../controllers/pasajerosController.js')

const router = express.Router();

router.get('/', pasajerosController.get);
router.get('/:id', pasajerosController.getById);
router.post('/', pasajerosController.post);
router.put('/:id', pasajerosController.put);
router.delete('/:id', pasajerosController.delete);

module.exports = router;
