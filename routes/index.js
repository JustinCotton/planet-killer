const express = require('express')
const router = express.Router()

const celestialBodyController = require('../controllers/celestialBodyController')

router.get('/', celestialBodyController.index)
router.post('/', celestialBodyController.create)
router.get('/:id', celestialBodyController.show)
router.put('/:id', celestialBodyController.update)
router.delete('/:id', celestialBodyController.delete)

module.exports = router