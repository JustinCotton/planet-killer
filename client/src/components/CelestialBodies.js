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
        .post('/api/v1/celestialbodies', this.state.newCelestialBody)
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
    const celestialBodiesStyle = {
        fontSize: "20px",
        display: "inline-block",
        color: "yellow",
        textDecoration: "none",
        margin: "10px",
        borderRadius: "100px",
        height: "200px"
    }
    const buttonStyle = {
        margin: "15px"
    }
    return (
      <div>
        <h1>Celestial Bodies</h1>
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
                : <div>
                <div><button onClick={this.toggleCelestialBodyForm} style={buttonStyle}>Add New Celestial Body</button></div>
                  {
                    this.state.celestialBodies.map(celestialBody => {
                        return (
                            <div key={celestialBody._id} style={celestialBodiesStyle}>                  
                                <Link to={`/celestialbodies/${celestialBody._id}`}><img src={celestialBody.image} style={celestialBodiesStyle}/><br></br>{celestialBody.name}</Link>
                            </div>
                        )
                    })
                  }
            </div>
        }
      </div>
    )
  }
}

export default CelestialBodies