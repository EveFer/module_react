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
import Conversion from './pages/Conversion'
import CreditCard from './pages/CreditCard'

// CSS
import './App.css'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Menu />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/notes'>
              <Notes />
            </Route>
            <Route exact path='/holi' component={Notes}>
              <h1>Holis!!</h1>
            </Route>
            <Router exact path='/currency-converter' component={Conversion}>
              <Conversion />
            </Router>
            <Router exact path='/credit-card'>
              <CreditCard />
            </Router>
          </Switch>
        </div>
      </Router>
    )
  }
}
