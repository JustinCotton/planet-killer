import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CelestialBodies extends Component {
  state = {
      celestialBodies: [],
      newCelestialBody: {
        name: '',
        image: '',
        classification: '',
        distanceFromEarth: '',
        galaxy: '',
        constellation: '',
        destroyed: false
      },
      isCelestialBodyFormDisplayed: false
  }

  componentDidMount = () => {
    axios.get('/api/v1/celestialBodies').then(res => {
        this.setState({celestialBodies: res.data})
    })
  }

  toggleCelestialBodyForm = () => {
      this.setState((state, props) => {
          return ({isCelestialBodyFormDisplayed: !state.isCelestialBodyFormDisplayed})
      })
  }

  handleChange = (e) => {
    const cloneNewCelestialBody = {...this.state.newCelestialBody}
    cloneNewCelestialBody[e.target.name] = e.target.value
    this.setState({newCelestialBody: cloneNewCelestialBody})
  }

  createCelestialBody = (e) => {
    e.preventDefault()
    axios
        .post('/api/v1/celestialbodies', {
            name: this.state.newCelestialBody.name,
            image: this.state.newCelestialBody.image,
            distanceFromEarth: this.state.newCelestialBody.distanceFromEarth,
            galaxy: this.state.newCelestialBody.galaxy,
            constellation: this.state.newCelestialBody.constellation
        })
        .then(res => {
            const celestialBodyList = [...this.state.celestialBodies]
            celestialBodyList.unshift(res.data)
            this.setState({
                newCelestialBody: {
                    name: '',
                    image: '',
                    classification: '',
                    distanceFromEarth: '',
                    galaxy: '',
                    constellation: '',
                    destroyed: false
                },
                isCelestialBodyFormDisplayed: false,
                celestialBodies: celestialBodyList
            })
        })

  }

  render() {
    return (
      <div>
        <h1>Celestial Bodies</h1>
        {
            this.state.celestialBodies.map(celestialBody => {
                return (
                    <div key={celestialBody._id}>
                        <Link
                            to={`/api/v1/celestialbodies/${celestialBody._id}`}
                        >
                            {celestialBody.name}
                        </Link>
                    </div>
                )
            })
        }
        <button onClick={this.toggleCelestialBodyForm}>Add New Celestial Body</button>
        {
            this.state.isCelestialBodyFormDisplayed
                ? <form onSubmit={this.createCelestialBody}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image URL</label>
                        <input
                            id="image"
                            type="text"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="classification">Classification</label>
                        <input
                            id="classification"
                            type="text"
                            name="classification"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.classification}
                        />
                    </div>
                    <div>
                        <label htmlFor="distanceFromEarth">Distance From Earth</label>
                        <textarea
                            id="distanceFromEarth"
                            type="text"
                            name="distanceFromEarth"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.distanceFromEarth}
                        />
                    </div>
                    <div>
                        <label htmlFor="galaxy">Galaxy</label>
                        <textarea
                            id="galaxy"
                            type="text"
                            name="galaxy"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.galaxy}
                        />
                    </div>
                    <div>
                        <label htmlFor="constellation">Constellation</label>
                        <textarea
                            id="constellation"
                            type="text"
                            name="constellation"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.constellation}
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

export default CelestialBodies