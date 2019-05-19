import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Planets from './components/Planets'
import Planet from './components/Planet'
import CelestialBodies from './components/CelestialBodies'
import CelestialBody from './components/CelestialBody'
import Background from './components/stars.jpg';

class App extends Component {
  render () {
    const style = {
      backgroundImage: "url(" + { Background } + ")",
      fontFamily: "Orbitron",
      textAlign: "center",
      color: "yellow"
    };
    const stats = {
      fontSize: "30px",
      display: "inline-block",
      color: "yellow"
    }
    return (
      <Router>
        <div style={style}>
          <h1>Planet Killer</h1>
          <h1>Celestial Bodies of Death!</h1>
          <div><Link to="/">Back to Command Center</Link></div>
          <div style={stats}>
            <div style={stats}><Link to="/planets">Planets</Link>   <Link to="/celestialbodies">Celestial Bodies</Link></div>   
          </div>
          <Switch>
            <Route exact path="/planets" component={Planets}/>
            <Route path="/planets/:id" component={Planet}/>
            <Route exact path="/celestialbodies" component={CelestialBodies}/>
            <Route path="/celestialbodies/:id" component={CelestialBody}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App