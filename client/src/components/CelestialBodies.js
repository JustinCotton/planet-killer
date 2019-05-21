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
        fontSize: "25px",
        display: "inline-block",
        color: "yellow",
        textDecoration: "none",
        margin: "10px",
        borderRadius: "100px",
        height: "200px",
        fontWeight: "bold"
    }
    const celestialBodyStyle = {
        borderRadius: "150px",
        height: "300px",
        margin: "10px"
    }
    const celestialBodyName = {
        fontSize: "40px",
    }
    const formStyle = {
        fontSize: "25px",
        margin: "15px 0px 0px",
        fontWeight: "bold"
    }

    return (
      <div>
        {
            this.state.isCelestialBodyFormDisplayed
                ? <div><h1 style={celestialBodyName}>Create {this.state.newCelestialBody.name}</h1>
                <div><img src={this.state.newCelestialBody.image} style={celestialBodyStyle}/></div> 
                <form onSubmit={this.createCelestialBody} style={formStyle}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <textarea
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image URL: </label>
                        <textarea
                            id="image"
                            type="text"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="classification">Classification: </label>
                        <textarea
                            id="classification"
                            type="text"
                            name="classification"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.classification}
                        />
                    </div>
                    <div>
                        <label htmlFor="distanceFromEarth">Distance From Earth: </label>
                        <textarea
                            id="distanceFromEarth"
                            type="text"
                            name="distanceFromEarth"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.distanceFromEarth}
                        />
                    </div>
                    <div>
                        <label htmlFor="galaxy">Galaxy: </label>
                        <textarea
                            id="galaxy"
                            type="text"
                            name="galaxy"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.galaxy}
                        />
                    </div>
                    <div>
                        <label htmlFor="constellation">Constellation: </label>
                        <textarea
                            id="constellation"
                            type="text"
                            name="constellation"
                            onChange={this.handleChange}
                            value={this.state.newCelestialBody.constellation}
                        />
                    </div>
                    <button className="purpleButton">Create {this.state.newCelestialBody.name}</button>
                    <button onClick={this.toggleCelestialBodyForm} className="blueButton">Cancel</button>
                </form>
                </div>
                : <div>
                    <h1>Celestial Bodies</h1>
                  {
                    this.state.celestialBodies.map(celestialBody => {
                        return (
                            <div key={celestialBody._id} style={celestialBodiesStyle}>                  
                                <Link to={`/celestialbodies/${celestialBody._id}`}><img src={celestialBody.image} style={celestialBodiesStyle}/><br></br>{celestialBody.name}</Link>
                            </div>
                        )
                    })
                  }
                  <div><button onClick={this.toggleCelestialBodyForm} className="purpleButton">Add New Celestial Body</button></div>
            </div>
        }
      </div>
    )
  }
}

export default CelestialBodies