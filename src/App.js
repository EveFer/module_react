import React, { Component } from 'react'

// External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Notes from './pages/Notes'
import Menu from './pages/Menu'

// CSS
import './App.css'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/notes' component={Notes} />
            <Route exact path='/holi' component={Notes}>
              <h1>Holis!!</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
