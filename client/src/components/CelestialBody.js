import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";
import ControlPanel from './ControlPanel'

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
      axios.get(`/api/v1/celestialbodies/${this.props.match.params.id}`).then(res => {
          this.setState({celestialBody: res.data})
      })
  }

  deleteCelestialBody = () => {
      axios.delete(`/api/v1/celestialbodies/${this.props.match.params.id}`).then(res => {
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
        .put(`/api/v1/celestialbodies/${this.props.match.params.id}`, this.state.celestialBody)
        .then(res => {
            this.setState({celestialBody: res.data, isEditFormDisplayed: false})
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
    const celestialBodyStyle = {
        borderRadius: "150px",
        height: "300px",
        margin: "15px"
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
            this.state.isEditFormDisplayed
                ? <div><h1 style={celestialBodyName}>Transform {this.state.celestialBody.name}</h1>
                <div><img src={this.state.celestialBody.image} style={celestialBodyStyle}/></div> 
                <form onSubmit={this.updateCelestialBody} style={formStyle}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <textarea
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image URL: </label>
                        <textarea
                            id="image"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="classification">Classification: </label>
                        <textarea
                            id="classification"
                            name="classification"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.classification}
                        />
                    </div>
                    <div>
                        <label htmlFor="distanceFromEarth">Distance From Earth: </label>
                        <textarea
                            id="distanceFromEarth"
                            name="distanceFromEarth"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.distanceFromEarth}
                        />
                    </div>
                    <div>
                        <label htmlFor="galaxy">Galaxy: </label>
                        <textarea
                            id="galaxy"
                            name="galaxy"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.galaxy}
                        />
                    </div>
                    <div>
                        <label htmlFor="constellation">Constellation: </label>
                        <textarea
                            id="constellation"
                            name="constellation"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.constellation}
                        />
                    </div>                    
                    <button className="yellowButton">Transform into {this.state.celestialBody.name}</button>
                    <button onClick={this.toggleEditForm} className="blueButton">Cancel</button>
                </form>
                </div>
              : <div style={stats}>
                    <h1 style={celestialBodyName}>{this.state.celestialBody.name}</h1>
                    <div><img src={this.state.celestialBody.image} style={celestialBodyStyle}/></div>
                    <div>Classification: {this.state.celestialBody.classification}</div>
                    <div>Distance From Earth: {this.state.celestialBody.distanceFromEarth}</div>
                    <div>Galaxy: {this.state.celestialBody.galaxy}</div>
                    <div>Constellation: {this.state.celestialBody.constellation}</div>
                    {/* <div>Destroyed: {this.state.celestialBody.destroyed}</div> */}
                    <div>
                        <Link to="/celestialbodies"><button className="greenButton">Spare</button></Link>
                        <button onClick={this.toggleEditForm} className="yellowButton">Transform</button>
                        <button onClick={this.deleteCelestialBody} className="redButton">Delete</button>
                        {/* <ControlPanel /> */}
                    </div>
                </div>
        }
      </div>
    );
  }
}

export default CelestialBody;