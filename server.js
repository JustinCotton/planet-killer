const express = require('express');
const app = express();
const { planetRouter, celestialBodyRouter } = require('./routes/index.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`))

/*
app.get('/', (req,res) => {
  res.send('Ready to wreak havoc!')
})
*/


app.use('/api/v1/planets', planetRouter)
app.use('/api/v1/celestialbodies', celestialBodyRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Blasting off from port " + PORT);
})
