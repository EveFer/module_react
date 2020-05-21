import React, { Component } from 'react'

import './Form.css'

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mexicanCoinToConvert: 0
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleChangeLastName = this.handleChangeLastName.bind(this)
  }

  handleChange (event) {
    const { value: mexicanCoinToConvert } = event.target
    this.setState({ mexicanCoinToConvert })
  }

  render () {
    const { mexicanCoinToConvert } = this.state
    const dollarConverted = (mexicanCoinToConvert / 23.66).toFixed(2)
    return (
      <div className='form-container'>
        <form>
          <input
            type='number'
            value={mexicanCoinToConvert}
            onChange={this.handleChange}
          />
        </form>
        <p>La conversion de {mexicanCoinToConvert} MXN es {dollarConverted} USD</p>
      </div>
    )
  }
}
