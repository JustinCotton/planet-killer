require('dotenv').config()
const mongoose = require('mongoose')

// if(process.env.MONGODB_URI) {
//     mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
// } else {
//     mongoose.connect('mongodb://localhost/planet-killer')
// }

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log("Mongoose has connected to MongoDB")
})

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error!!! ${error}`)
    process.exit(-1)
})

module.exports = mongoose