const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const CelestialBody = new Schema({
    name: String,
    classification: String,
    image: String,
    maxDistanceFromEarth: String,
    galaxy: String,
    constellation: String,
    destroyed: Boolean
})

module.exports = mongoose.model('CelestialBody', CelestialBody)