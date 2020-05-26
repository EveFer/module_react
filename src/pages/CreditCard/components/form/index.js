import React, { Component } from 'react'

// CSS
import './Form.css'

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cvc: '123',
      expiry: '12/12',
      owner: 'Fernanda Palacios',
      number: '**** **** **** ****'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
    this.props.handlerCardWrite(this.state)
  }

  render () {
    const { cvc, expiry, owner, number } = this.state
    return (
      <form class='form-credit-card'>
        <div>
          <input
            placeholder='1234-5678-9111-2345'
            name='number'
            value={number}
            onChange={this.handleChange}
          />
          <input
            placeholder='Fernanda Palacios'
            name='owner'
            value={owner}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            placeholder='12/18'
            name='expiry'
            value={expiry}
            onChange={this.handleChange}
          />
          <input
            placeholder='CVC'
            name='cvc'
            value={cvc}
            onChange={this.handleChange}
          />
        </div>
      </form>
    )
  }
}
