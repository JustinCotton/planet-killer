import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Planets from './components/Planets'
import Planet from './components/Planet'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <p>Planet Killer!</p>
          <Switch>
            <Route exact path="/planets" component={Planets}/>
            <Route path="/planets/:id" component={Planet}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App