let Planet = require('../models/Planet.js')
let CelestialBody = require('../models/CelestialBody.js')

let newPlanets = [
  {
    name: "Mercury",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mercury.png,
    averageDistanceFromEarth: "56,974,146 miles",
    climate: "Hot!",
    meanTemperatureF: 333,
    percentOfEarthGravity: 37.8,
    moons: 0,
    destroyed: false
  },
  {
    name: "Venus",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/venus.png",
    averageDistanceFromEarth: "25,724,767 miles",
    climate: "Super Hot!",
    meanTemperatureF: 867,
    percentOfEarthGravity: 90.7,
    moons: 0,
    destroyed: false
  },
  {
    name: "Earth",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/earth.png",
    averageDistanceFromEarth: "0 miles",
    climate: "Habitable, for now...",
    meanTemperatureF: 59,
    percentOfEarthGravity: 100,
    moons: 1,
    destroyed: false
  },
  {
    name: "Mars",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png",
    averageDistanceFromEarth: "48,678,219 miles",
    climate: "Cold",
    meanTemperatureF: -85,
    percentOfEarthGravity: 16.6,
    moons: 0,
    destroyed: false
  },
  {
    name: "Jupiter",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/jupiter.png",
    averageDistanceFromEarth: "390,674,710 miles",
    climate: "Very Cold",
    meanTemperatureF: -166,
    percentOfEarthGravity: 236,
    moons: 79,
    destroyed: false
  },
  {
    name: "Saturn",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/saturn.png",
    averageDistanceFromEarth: "792,248,270 miles",
    climate: "Super Cold",
    meanTemperatureF: -220,
    percentOfEarthGravity: 91.6,
    moons: 62,
    destroyed: false
  },
  {
    name: "Uranus",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/uranus.png",
    averageDistanceFromEarth: "1,692,662,530 miles",
    climate: "Unbearably Cold",
    meanTemperatureF: -320,
    percentOfEarthGravity: 88.9,
    moons: 27,
    destroyed: false
  },
  {
    name: "Neptune",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/neptune.png",
    averageDistanceFromEarth: "2,703,959,960 miles",
    climate: "Stormy and Cold",
    meanTemperatureF: -320,
    percentOfEarthGravity: 112,
    moons: 14,
    destroyed: false
  },
  {
    name: "Pluto",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/pluto.png",
    averageDistanceFromEarth: "3,670,262,530 miles",
    climate: "Frigid",
    meanTemperatureF: -320,
    percentOfEarthGravity: 88.9,
    moons: 14,
    destroyed: false
  }  
]

let newCelestialBodies = [
  {
    name: "Earth's Sun",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/sun.png",
    classification: "Yellow Dwarf Star",
    distanceFromEarth: "92.96 million miles",
    galaxy: "Milky Way",
    constellation: "None",
    destroyed: false
  },
  {
    name: "Earth's Moon",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/moon.png",
    classification: "Natural Satellite",
    distanceFromEarth: "238,900 miles",
    galaxy: "Milky Way",
    constellation: "None",
    destroyed: false
  },
  {
    name: "Sirius",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sirius_A_and_B_artwork.jpg/1920px-Sirius_A_and_B_artwork.jpg",
    classification: "Binary Star",
    distanceFromEarth: "8.611 light years",
    galaxy: "Milky Way",
    constellation: "Canis Major",
    destroyed: false
  },
  {
    name: "Carina Nebula",
    image: "https://www.abc.net.au/news/image/9781926-3x2-940x627.jpg",
    classification: "Nebula",
    distanceFromEarth: "2,600 parsecs",
    galaxy: "Milky Way",
    constellation: "Carina",
    destroyed: false
  },
  {
    name: "Andromeda",
    image: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/650137main_pia15416b-43_full.jpg",
    classification: "Galaxy",
    distanceFromEarth: "2.537 million light years",
    galaxy: "Andromeda",
    constellation: "Andromeda",
    destroyed: false
  },
  {
    name: "Pistol Star",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Pistol_star_and_nebula.jpg",
    classification: "Blue Hypergiant Star",
    distanceFromEarth: "25,000 light years",
    galaxy: "Milky Way",
    constellation: "Sagittarius",
    destroyed: false
  },
  {
    name: "Io",
    image: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/io.png",
    classification: "Natural Satellite",
    distanceFromEarth: "390,400,000 miles",
    galaxy: "Milky Way",
    constellation: "None",
    destroyed: false
  },
  {
    name: "Crab Pulsar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Chandra-crab.jpg/1920px-Chandra-crab.jpg",
    classification: "Blue Hypergiant Star",
    distanceFromEarth: "2.0 kiloparsecs",
    galaxy: "Milky Way",
    constellation: "Taurus",
    destroyed: false
  }  
]

Planet.create(newPlanets).then(system => {
  console.log('Created Planets ', system)
})

CelestialBody.create(newCelestialBodies).then(galaxy => {
  console.log('Created Celestial Bodies ', galaxy)
})