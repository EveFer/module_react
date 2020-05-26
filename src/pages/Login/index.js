import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Header from '../../components/Header'

// CSS
import './Login.css'

// services
import { logIn as loginService } from '../../services'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { email, password } = this.state
    const data = {
      email,
      password
    }
    console.log(data)
    loginService(data, this.handlerServiceResponse)
      .then(data => {
        window.localStorage.setItem('userAuthToken', data.data.token)
        this.setState({
          isLoggedIn: true
        })
      })
      .catch(error => console.log(error))
  }

  handleChange ({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  render () {
    const { email, password, isLoggedIn } = this.state
    return (
      <div className='Container'>
        {
          isLoggedIn ? (
            <Redirect to='/' />
          ) : (
            <div>
              <Header
                title='Login'
                description='Inicia Sesión'
              />
              <form onSubmit={this.handleSubmit}>
                <input
                  type='email'
                  value={email}
                  placeholder='Email'
                  name='email'
                  onChange={this.handleChange}
                />
                <input
                  type='password'
                  value={password}
                  placeholder='********'
                  name='password'
                  onChange={this.handleChange}
                />
                <button type='submit'>Login</button>
              </form>
            </div>
          )
        }
      </div>
    )
  }
}
