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
    const planetsStyle = {
        fontSize: "25px",
        display: "inline-block",
        color: "yellow",
        textDecoration: "none",
        margin: "10px",
        borderRadius: "100px",
        height: "200px",
        fontWeight: "bold"
    }
    const wrapperStyle = {
        margin: "20px 0px"
    }
    const planetStyle = {
        borderRadius: "150px",
        height: "300px",
        margin: "10px"
    }
    const planetName = {
        fontSize: "40px",
        margin: "15px 0px 0px"
    }
    const formStyle = {
        fontSize: "25px",
        margin: "15px 0px 0px",
        fontWeight: "bold"
    }

    return (
      <div style={wrapperStyle}>
        {
            this.state.isPlanetFormDisplayed
                ? <div><h1 style={planetName}>Create {this.state.newPlanet.name}</h1>
                <div><img src={this.state.newPlanet.image} style={planetStyle}/></div>
                <form onSubmit={this.createPlanet} style={formStyle}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <textarea
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image URL: </label>
                        <textarea
                            id="image"
                            type="text"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="averageDistanceFromEarth">Average Distance From Earth: </label>
                        <textarea
                            id="averageDistanceFromEarth"
                            type="text"
                            name="averageDistanceFromEarth"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.averageDistanceFromEarth}
                        />
                    </div>
                    <div>
                        <label htmlFor="climate">Climate: </label>
                        <textarea
                            id="climate"
                            type="text"
                            name="climate"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.climate}
                        />
                    </div>
                    <div>
                        <label htmlFor="meanTemperatureF">Mean Temperature in &deg;F: </label>
                        <textarea
                            id="meanTemperatureF"
                            type="text"
                            name="meanTemperatureF"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.meanTemperatureF}
                        />
                    </div>
                    <div>
                        <label htmlFor="percentOfEarthGravity">% of Earth's Gravity: </label>
                        <textarea
                            id="percentOfEarthGravity"
                            type="text"
                            name="percentOfEarthGravity"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.percentOfEarthGravity}
                        />
                    </div>
                    <div>
                        <label htmlFor="moons">Moons: </label>
                        <textarea
                            id="moons"
                            type="text"
                            name="moons"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.moons}
                        />
                    </div>
                    <button className="purpleButton">Create {this.state.newPlanet.name}</button>
                    <button onClick={this.togglePlanetForm} className="blueButton">Cancel</button>
                </form>
                </div>
                : <div>
                    <h1>Planets</h1>                 
                      {
                        this.state.planets.map(planet => {
                            return (
                                <div key={planet._id} style={planetsStyle}>                        
                                    <Link to={`/planets/${planet._id}`}><img src={planet.image} style={planetsStyle}/><br></br>{planet.name}</Link>
                                </div>
                            )
                        })
                      }
                      <div><button onClick={this.togglePlanetForm} className="purpleButton">Create New Planet</button></div>
                </div>
        }
      </div>
    )
  }
}

export default Planets