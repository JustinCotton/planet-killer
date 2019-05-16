const CelestialBody = require('../models/CelestialBody.js')

const celestialBodyController = {

  index: (req, res) => {
    CelestialBody.find().then((celestialBodies) => {
      res.json(celestialBodies)
    }).catch((err) => {
      console.log(err)
    })
  },

  show: (req, res) => {
    CelestialBody.findById(req.params.id).then((celestialBody) => {
      res.json(celestialBody)
    }).catch((err) => {
      console.log(err)
      res.json(err)
    })
  },

  create: (req, res) => {
    CelestialBody.create(req.body).then((savedCelestialBody) => {
      res.json(savedCelestialBody)
    }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
  },

  update: (req, res) => {
    CelestialBody.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((savedCelestialBody) => {   
      res.json(savedCelestialBody)
    }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
  },

  delete: (req, res) => {
    CelestialBody.findByIdAndRemove(req.params.id).then(() => {
      res.json({
        msg: 'Successfully Deleted'
      })
    }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
  }
}

module.exports = celestialBodyController;