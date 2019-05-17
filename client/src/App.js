import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Planets from './components/Planets'
import Planet from './components/Planet'
import CelestialBodies from './components/CelestialBodies'
import CelestialBody from './components/CelestialBody'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <p>Planet Killer!</p>
          <div><Link to="/">Back to Command Center</Link></div>
          <div><Link to="/planets">Planets</Link></div>
          <div><Link to="/celestialbodies">Celestial Bodies</Link></div>
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