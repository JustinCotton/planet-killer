const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Planet = new Schema({
    name: String,
    image: String,
    averageDistanceFromEarth: String,
    climate: String,
    meanTemperatureF: Number,
    percentOfEarthGravity: String,
    moons: Number,
    destroyed: Boolean
})

module.exports = mongoose.model('Planet', Planet)