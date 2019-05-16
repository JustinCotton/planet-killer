import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Planets extends Component {
  state = {
      planets: [],
      newPlanet: {
          name: '',
          description: ''
      },
      isPlanetFormDisplayed: false
  }

  componentDidMount = () => {
    axios.get('/planets').then(res => {
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
        .post('/planets', {
            name: this.state.newPlanet.name,
            description: this.state.newPlanet.description
        })
        .then(res => {
            const planetsList = [...this.state.planets]
            planetsList.unshift(res.data)
            this.setState({
                newPlanet: {
                    name: '',
                    description: ''
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
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.newPlanet.description}
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