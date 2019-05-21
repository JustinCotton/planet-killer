import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class Planet extends Component {
  state = {
      planet: {
          name: '',
          image: '',
          averageDistanceFromEarth: '',
          climate: '',
          meanTemperatureF: null,
          percentOfEarthGravity: '',
          moons: null,
          destroyed: false          
      },
      redirectToHome: false,
      isEditFormDisplayed: false
  }

  componentDidMount = () => {
      axios.get(`/api/v1/planets/${this.props.match.params.id}`).then(res => {
          this.setState({planet: res.data})
      })
  }

  deletePlanet = () => {
      axios.delete(`/api/v1/planets/${this.props.match.params.id}`).then(res => {
          this.setState({redirectToHome: true})
      })
  }

  toggleEditForm = () => {
      this.setState((state, props) => {
          return {isEditFormDisplayed: !state.isEditFormDisplayed}
      })
  }

  handleChange = (e) => {
      const clonePlanet = {...this.state.planet}
      clonePlanet[e.target.name] = e.target.value
      this.setState({planet: clonePlanet})
  }

  updatePlanet = (e) => {
      e.preventDefault()
      axios
        .put(`/api/v1/planets/${this.props.match.params.id}`, this.state.planet)
        .then(res => {
            this.setState({planet: res.data, isEditFormDisplayed: false})
        })
  }

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/destruction" />)
    }

    const stats = {
        fontSize: "25px",
        display: "inline-block",
        color: "yellow",
        fontWeight: "bold"
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
      <div>
        {
            this.state.isEditFormDisplayed
                ? <div><h1 style={planetName}>Transform {this.state.planet.name}</h1>
                <div><img src={this.state.planet.image} style={planetStyle}/></div>
                <form onSubmit={this.updatePlanet} style={formStyle}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <textarea
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.planet.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image URL: </label>
                        <textarea
                            id="image"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.planet.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="averageDistanceFromEarth">Average Distance From Earth: </label>
                        <textarea
                            id="averageDistanceFromEarth"
                            name="averageDistanceFromEarth"
                            onChange={this.handleChange}
                            value={this.state.planet.averageDistanceFromEarth}
                        />
                    </div>
                    <div>
                        <label htmlFor="climate">Climate: </label>
                        <textarea
                            id="climate"
                            name="climate"
                            onChange={this.handleChange}
                            value={this.state.planet.climate}
                        />
                    </div>
                    <div>
                        <label htmlFor="meanTemperatureF">Mean Temperature in &deg;F: </label>
                        <textarea
                            id="meanTemperatureF"
                            name="meanTemperatureF"
                            onChange={this.handleChange}
                            value={this.state.planet.meanTemperatureF}
                        />
                    </div>
                    <div>
                        <label htmlFor="percentOfEarthGravity">% of Earth's Gravity: </label>
                        <textarea
                            id="percentOfEarthGravity"
                            name="percentOfEarthGravity"
                            onChange={this.handleChange}
                            value={this.state.planet.percentOfEarthGravity}
                        />
                    </div>
                    <div>
                        <label htmlFor="moons">Number of Moons: </label>
                        <textarea
                            id="moons"
                            name="moons"
                            onChange={this.handleChange}
                            value={this.state.planet.moons}
                        />
                    </div>
                    <button className="yellowButton">Transform into {this.state.planet.name}</button>
                    <button onClick={this.toggleEditForm} className="blueButton">Cancel</button>
                </form>
                </div>
                : <div style={stats}>
                    <h1 style={planetName}>{this.state.planet.name}</h1>
                    <div><img src={this.state.planet.image} style={planetStyle}/></div>
                    <div>Average Distance From Earth: {this.state.planet.averageDistanceFromEarth}</div>
                    <div>Climate: {this.state.planet.climate}</div>
                    <div>Mean Temperature: {this.state.planet.meanTemperatureF}&deg;F</div>
                    <div>Gravity Related to Earth's: {this.state.planet.percentOfEarthGravity}%</div>
                    <div>Number of Moons: {this.state.planet.moons}</div>
                    {/* <div>Destroyed: {this.state.planet.destroyed}</div> */}
                    <div> 
                        <Link to="/planets"><button className="greenButton">Spare</button></Link>
                        <button onClick={this.toggleEditForm} className="yellowButton">Transform</button>
                        <button onClick={this.deletePlanet} className="redButton">Destroy</button>
                        {/* <ControlPanel /> */}
                    </div>
                </div>
        }
      </div>
    );
  }
}

export default Planet;