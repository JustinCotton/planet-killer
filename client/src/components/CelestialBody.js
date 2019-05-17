import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class CelestialBody extends Component {
  state = {
      celestialBody: {
        name: '',
        image: '',
        classification: '',
        distanceFromEarth: '',
        galaxy: '',
        constellation: '',
        destroyed: false         
      },
      redirectToHome: false,
      isEditFormDisplayed: false
  }

  componentDidMount = () => {
      axios.get(`/celestialbodies/${this.props.match.params.id}`).then(res => {
          this.setState({celestialBody: res.data})
      })
  }

  deleteCelestialBody = () => {
      axios.delete(`/celestialbodies/${this.props.match.params.id}`).then(res => {
          this.setState({redirectToHome: true})
      })
  }

  toggleEditForm = () => {
      this.setState((state, props) => {
          return {isEditFormDisplayed: !state.isEditFormDisplayed}
      })
  }

  handleChange = (e) => {
      const cloneCelestialBody = {...this.state.celestialBody}
      cloneCelestialBody[e.target.name] = e.target.value
      this.setState({celestialBody: cloneCelestialBody})
  }

  updateCelestialBody = (e) => {
      e.preventDefault()
      axios
        .put(`/celestialbodies/${this.props.match.params.id}`, {
            name: this.state.celestialBody.name,
            image: this.state.celestialBody.image,            
            averageDistanceFromEarth: this.state.celestialBody.averageDistanceFromEarth,
            climate: this.state.celestialBody.climate,
            meanTemperatureF: this.state.celestialBody.meanTemperatureF,
            percentOfEarthGravity: this.state.celestialBody.percentOfEarthGravity,
            moons: this.state.celestialBody.moons,
            destroyed: this.state.celestialBody.destroyed    
        })
        .then(res => {
            this.setState({celestialBody: res.data, isEditFormDisplayed: false})
        })
  }

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/celestialbodies" />)
    }

    return (
      <div>
        <Link to="/celestialbodies">Back to Celestial Bodies</Link>
        <h1>{this.state.celestialBodies.name}</h1>
        {
            this.state.isEditFormDisplayed
                ? <form onSubmit={this.updateCelestialBody}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image URL</label>
                        <textarea
                            id="image"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.planet.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="averageDistanceFromEarth">Average Distance From Earth</label>
                        <textarea
                            id="averageDistanceFromEarth"
                            name="averageDistanceFromEarth"
                            onChange={this.handleChange}
                            value={this.state.planet.averageDistanceFromEarth}
                        />
                    </div>
                    <div>
                        <label htmlFor="climate">Climate</label>
                        <textarea
                            id="climate"
                            name="climate"
                            onChange={this.handleChange}
                            value={this.state.planet.climate}
                        />
                    </div>
                    <div>
                        <label htmlFor="meanTemperatureF">Mean Temperature in &deg;F</label>
                        <textarea
                            id="meanTemperatureF"
                            name="meanTemperatureF"
                            onChange={this.handleChange}
                            value={this.state.planet.meanTemperatureF}
                        />
                    </div>
                    <div>
                        <label htmlFor="percentOfEarthGravity">% of Earth's Gravity</label>
                        <textarea
                            id="percentOfEarthGravity"
                            name="percentOfEarthGravity"
                            onChange={this.handleChange}
                            value={this.state.planet.percentOfEarthGravity}
                        />
                    </div>
                    <div>
                        <label htmlFor="moons">Number of Moons</label>
                        <textarea
                            id="moons"
                            name="moons"
                            onChange={this.handleChange}
                            value={this.state.planet.moons}
                        />
                    </div>
                    <button>Update</button>
                </form>
                : <div>
                    <div><img src={this.state.celestialBody.image} width="200px"/></div>
                    <div>Classification: {this.state.celestialBody.classification}</div>
                    <div>Distance From Earth: {this.state.celestialBody.distanceFromEarth}</div>
                    <div>Galaxy: {this.state.celestialBody.galaxy}</div>
                    <div>Constellation: {this.state.celestialBody.constellation}</div>
                    {/* <div>Destroyed: {this.state.celestialBody.destroyed}</div> */}
                    <div><button onClick={this.toggleEditForm}>Edit</button></div>
                    <div><button onClick={this.deleteCelestialBody}>Delete</button></div>
                </div>
        }
      </div>
    );
  }
}

export default CelestialBody;