const CelestialBody = require('../models/CelestialBody.js')

const celestialBodyController = {
    index: async (req, res) => {
        try {
            const celestialbodies = await CelestialBody.find({})
            res.json(celestialbodies)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const celestialBodyId = req.params.id
            const celestialBody = await CelestialBody.findById(celestialBodyId)
            res.json(celestialBody)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newCelestialBody = req.body
          const savedCelestialBody = await CelestialBody.create(newCelestialBody)
          res.json(savedCelestialBody)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
          const celestialBodyId = req.params.id
          const updatedCelestialBody = req.body
          const savedCelestialBody = await CelestialBody.findByIdAndUpdate(celestialBodyId, updatedCelestialBody, {new: true})
          res.json(savedCelestialBody)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const celestialBodyId = req.params.id
          const deletedCelestialBody = await CelestialBody.findByIdAndRemove(celestialBodyId)
          res.json(deletedCelestialBody)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = celestialBodyController