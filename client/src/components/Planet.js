import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class Planet extends Component {
  state = {
      planet: {
          name: '',
          description: ''
      },
      redirectToHome: false,
      isEditFormDisplayed: false
  }

  componentDidMount = () => {
      axios.get(`/planets/${this.props.match.params.id}`).then(res => {
          this.setState({planet: res.data})
      })
  }

  deletePlanet = () => {
      axios.delete(`/planets/${this.props.match.params.id}`).then(res => {
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
        .put(`/planets/${this.props.match.params.id}`, {
            name: this.state.planet.name,
            description: this.state.planet.description
        })
        .then(res => {
            this.setState({planet: res.data, isEditFormDisplayed: false})
        })
  }

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/planets" />)
    }

    return (
      <div>
        <Link to="/planets">Back to Planets</Link>
        <h1>Planet</h1>
        <button onClick={this.toggleEditForm}>Edit</button>
        {
            this.state.isEditFormDisplayed
                ? <form onSubmit={this.updatePlanet}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.planet.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.planet.description}
                        />
                    </div>
                    <button>Update</button>
                </form>
                : <div>
                    <div>
                        Name: {this.state.planet.name}
                    </div>
                    <div>
                        Description: {this.state.planet.description}
                    </div>
                    <button onClick={this.deletePlanet}>Delete</button>
                </div>
        }
      </div>
    );
  }
}

export default Planet;