const Planet = require('../models/Planet.js')

const planetController = {

  index: (req, res) => {
    Planet.find().then((planets) => {
      res.json(planets)
    }).catch((err) => {
      console.log(err)
    })
  },

  show: (req, res) => {
    Planet.findById(req.params.id).then((planet) => {
      res.json(planet)
    }).catch((err) => {
      console.log(err)
      res.json(err)
    })
  },

  create: (req, res) => {
    Planet.create(req.body).then((savedPlanet) => {
      res.json(savedPlanet)
    }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
  },

  update: (req, res) => {
    Planet.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((savedPlanet) => {   
      res.json(savedPlanet)
    }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
  },

  delete: (req, res) => {
    Planet.findByIdAndRemove(req.params.id).then(() => {
      res.json({
        msg: 'Successfully Deleted'
      })
    }).catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
  }
}

module.exports = planetController;