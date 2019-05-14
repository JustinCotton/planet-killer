const CelestialBody = require('../models/CelestialBody.js')

CelestialBody.deleteMany().then(() => {
    const jupiter = new CelestialBody({name: "Jupiter", classification: "Planet", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg", maxDistanceFromEarth: "601 million miles", galaxy: "Milky Way", constellation: "None", destroyed: false})
    return jupiter.save()
  }).then(() => {
    const carinaNebula = new CelestialBody({name: "Carina Nebula", classification: "Nebula", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Carina_Nebula_by_Harel_Boren_%28151851961%2C_modified%29.jpg/1920px-Carina_Nebula_by_Harel_Boren_%28151851961%2C_modified%29.jpg", distanceFromEarth: "2,600 parsecs", galaxy: "Milky Way", constellation: "Carina", destroyed: false})
    return carinaNebula.save()
  }).then(() => {
    const sirius = new CelestialBody({name: "Sirius", classification: "Binary Star", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sirius_A_and_B_artwork.jpg/1920px-Sirius_A_and_B_artwork.jpg", distanceFromEarth: "8.611 light years", galaxy: "Milky Way", constellation: "Canis Major", destroyed: false})
    return sirius.save()
  })