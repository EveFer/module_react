import React, { Component } from 'react'

// External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Clock from './pages/Clock'
import Cards from './pages/Cards'
import Notes from './pages/Notes'
import Menu from './pages/Menu'
import Conversion from './pages/Conversion'
import CreditCard from './pages/CreditCard'

import Login from './pages/Login'

// CSS
import './App.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isUserLoggedIn: false
    }
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount () {
    const authToken = localStorage.getItem('userAuthToken')
    if (authToken) {
      this.setState({
        isUserLoggedIn: true
      })
    }
  }

  logOut () {
    localStorage.removeItem('userAuthToken')
    this.setState({
      isUserLoggedIn: false
    })
  }

  render () {
    const { isUserLoggedIn } = this.state
    return (
      <Router>
        <div className='App'>
          <Menu isUserLoggedIn={isUserLoggedIn} logOut={this.logOut} />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/clock'>
              <Clock />
            </Route>
            <Route exact path='/posts'>
              <Cards />
            </Route>
            <Route exact path='/notes'>
              <Notes isUserLoggedIn={isUserLoggedIn} />
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
            <Router exact path='/login'>
              <Login />
            </Router>
          </Switch>
        </div>
      </Router>
    )
  }
}
