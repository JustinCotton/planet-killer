const express = require('express')
const router = express.Router()

// import controllers
const planetController = require('../controllers/planetController')
const celestialBodyController = require('../controllers/celestialBodyController')

// planet routes
router.get('/planets', planetController.index)
router.post('/planets', planetController.create)
router.get('/planets/:id', planetController.show)
router.put('/planets/:id', planetController.update)
router.delete('/planets/:id', planetController.delete)

// celestial body routes
router.get('/celestialbodies', celestialBodyController.index)
router.post('/celestialbodies', celestialBodyController.create)
router.get('/celestialbodies/:id', celestialBodyController.show)
router.put('/celestialbodies/:id', celestialBodyController.update)
router.delete('/celestialbodies/:id', celestialBodyController.delete)

module.exports = router