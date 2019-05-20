import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Planets from './components/Planets'
import Planet from './components/Planet'
import CelestialBodies from './components/CelestialBodies'
import CelestialBody from './components/CelestialBody'
import WeaponSystem from './components/WeaponSystem'

class App extends Component {
  render () {
    const style = {
      fontFamily: "Orbitron",
      textAlign: "center",
      color: "yellow"
    };
    const stats = {
      fontSize: "30px",
      display: "inline-block",
      color: "yellow",
      textDecoration: "none"
    }
    const titleStyle = {
      fontSize: "65px",
      fontFamily: "Audiowide",
      // fontFamily: "Press Start 2P",
      textAlign: "center",
      color: "yellow",
      margin: "10px",
      textDecoration: "none"
    }
    const links = {
      fontSize: "30px",
      display: "inline-block",
      color: "yellow",
      textDecoration: "none",
      margin: "0px 20px"
    }
  
    return (
      <Router>
        <div style={style}>
          {/* <h1>Celestial Bodies of Death!</h1> */}
          <div><Link to="/"><h1 style={titleStyle}>Planet Killer!</h1></Link></div>
          <div style={stats}>
            <div style={links}><Link to="/planets">Planets</Link></div> | 
            <div style={links}><Link to="/celestialbodies">Celestial Bodies</Link></div>
          </div>
          <Switch>
            <Route exact path="/" component={WeaponSystem}/>
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