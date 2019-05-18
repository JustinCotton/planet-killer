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
        .put(`/api/v1/celestialbodies/${this.props.match.params.id}`, this.state.celestialBody.destroyed)
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
        <h1>{this.state.celestialBody.name}</h1>
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
                            value={this.state.celestialBody.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="classification">Classification</label>
                        <textarea
                            id="classification"
                            name="classification"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.classification}
                        />
                    </div>
                    <div>
                        <label htmlFor="distanceFromEarth">Distance From Earth</label>
                        <textarea
                            id="distanceFromEarth"
                            name="distanceFromEarth"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.distanceFromEarth}
                        />
                    </div>
                    <div>
                        <label htmlFor="galaxy">Galaxy</label>
                        <textarea
                            id="galaxy"
                            name="galaxy"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.galaxy}
                        />
                    </div>
                    <div>
                        <label htmlFor="constellation">Constellation</label>
                        <textarea
                            id="constellation"
                            name="constellation"
                            onChange={this.handleChange}
                            value={this.state.celestialBody.constellation}
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