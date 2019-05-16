const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const CelestialBody = new Schema({
    name: String,
    image: String,
    classification: String,
    distanceFromEarth: String,
    galaxy: String,
    constellation: String,
    destroyed: Boolean
})

module.exports = mongoose.model('CelestialBody', CelestialBody)