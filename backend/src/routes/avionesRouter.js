const express = require('express');
const router = express.Router();
const avionesController = require('../Controllers/avionesController.js');

router.get('/', avionesController.get);
router.get('/:id', avionesController.getById);
router.post('/', avionesController.post);
router.put('/:id', avionesController.put);
router.delete('/:id', avionesController.delete);

module.exports = router;
