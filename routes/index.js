const express = require('express')
const planetRouter = express.Router()
const celestialBodyRouter = express.Router()

// import controllers
const planetController = require('../controllers/planetController')
const celestialBodyController = require('../controllers/celestialBodyController')

// planet routes
planetRouter.get   ('/', planetController.index)
planetRouter.post  ('/', planetController.create)
planetRouter.get   ('/:id', planetController.show)
planetRouter.put   ('/:id', planetController.update)
planetRouter.delete('/:id', planetController.delete)

// celestial body routes
celestialBodyRouter.get   ('/', celestialBodyController.index)
celestialBodyRouter.post  ('/', celestialBodyController.create)
celestialBodyRouter.get   ('/:id', celestialBodyController.show)
celestialBodyRouter.put   ('/:id', celestialBodyController.update)
celestialBodyRouter.delete('/:id', celestialBodyController.delete)

module.exports = { planetRouter, celestialBodyRouter }
