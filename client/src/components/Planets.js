import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Planets extends Component {
  state = {
      planets: [],
      newPlanet: {
        name: '',
        image: '',
        averageDistanceFromEarth: '',
        climate: '',
        meanTemperatureF: null,
        percentOfEarthGravity: '',
        moons: null,
        destroyed: false
      },
      isPlanetFormDisplayed: false
  }

  componentDidMount = () => {
    axios.get('/api/v1/planets').then(res => {
        this.setState({planets: res.data})
    })
  }

  togglePlanetForm = () => {
      this.setState((state, props) => {
          return ({isPlanetFormDisplayed: !state.isPlanetFormDisplayed})
      })
  }

  handleChange = (e) => {
    const cloneNewPlanet = {...this.state.newPlanet}
    cloneNewPlanet[e.target.name] = e.target.value
    this.setState({newPlanet: cloneNewPlanet})
  }

  createPlanet = (e) => {
    e.preventDefault()
    axios
        .post('/api/v1/planets', this.state.newPlanet)
        .then(res => {
            const planetsList = [...this.state.planets]
            planetsList.unshift(res.data)
            this.setState({
                newPlanet: {
                    name: '',
                    image: '',
                    averageDistanceFromEarth: '',
                    climate: '',
                    meanTemperatureF: null,
                    percentOfEarthGravity: '',
                    moons: null,
                    destroyed: false
                },
                isPlanetFormDisplayed: false,
                planets: planetsList
            })
        })

  }

  render() {
    return (
      <div>
        <h1>Planets</h1>
        {
            this.state.planets.map(planet => {
                return (
                    <div key={planet._id}>
                        <Link
                            to={`/planets/${planet._id}`}
                        >
                            {planet.name}
                        </Link>
                    </div>
                )
            })
        }
        <button onClick={this.togglePlanetForm}>Add New Planet</button>
        {
            this.state.isPlanetFormDisplayed
                ? <form onSubmit={this.createPlanet}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image URL</label>
                        <input
                            id="image"
                            type="text"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="averageDistanceFromEarth">Average Distance From Earth</label>
                        <input
                            id="averageDistanceFromEarth"
                            type="text"
                            name="averageDistanceFromEarth"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.averageDistanceFromEarth}
                        />
                    </div>
                    <div>
                        <label htmlFor="climate">Climate</label>
                        <textarea
                            id="climate"
                            type="text"
                            name="climate"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.climate}
                        />
                    </div>
                    <div>
                        <label htmlFor="meanTemperatureF">Mean Temperature in &deg;F</label>
                        <textarea
                            id="meanTemperatureF"
                            type="text"
                            name="meanTemperatureF"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.meanTemperatureF}
                        />
                    </div>
                    <div>
                        <label htmlFor="percentOfEarthGravity">% of Earth's Gravity</label>
                        <textarea
                            id="percentOfEarthGravity"
                            type="text"
                            name="percentOfEarthGravity"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.percentOfEarthGravity}
                        />
                    </div>
                    <div>
                        <label htmlFor="moons">Moons</label>
                        <textarea
                            id="moons"
                            type="text"
                            name="moons"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.moons}
                        />
                    </div>
                    <button>Create</button>
                </form>
                : null
        }
      </div>
    )
  }
}

export default Planets