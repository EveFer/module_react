import React, { Component } from 'react'

// CSS
import './Conversion.css'

import Header from '../../components/Header'

export default class Conversion extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valueConvertedToEur: 0,
      valueConvertedToUSD: 0,
      valueConvertedToMXN: 0
    }
  }

  handleInput = ({target: {name, value}}) => {
    let currencyMXN = 0
    let currencyUSD = 0
    let currencyEUR = 0
    if (name === 'valueConvertedToMXN') {
      currencyMXN = value
      currencyUSD = (value/23.24).toFixed(3)
      currencyEUR = (value/ 25.49).toFixed(3)
    }else if (name === 'valueConvertedToUSD') {
      currencyMXN = (value*23.24).toFixed(3)
      currencyUSD = value
      currencyEUR = (value*0.91).toFixed(3)
    }else {
      currencyMXN = (value*25.47).toFixed(3)
      currencyUSD = (value/1.10).toFixed(3)
      currencyEUR = value
    }
    this.setState({
      valueConvertedToEur: currencyEUR,
      valueConvertedToUSD: currencyUSD,
      valueConvertedToMXN: currencyMXN 
    })
  }

  handleChangeMXN = ({target: {name, value}}) => {
    console.log({[name]: value})
        this.setState({
            valueConvertedToEur: (value*0.039).toFixed(3),
            valueConvertedToUSD: (value*0.043).toFixed(3),
            valueConvertedToMXN: value
        })
  }

  handleChangeUSD = ({target: {name, value}}) => {
    console.log({[name]: value})
        this.setState({
            valueConvertedToEur: (value*0.91).toFixed(3),
            valueConvertedToUSD: value ,
            valueConvertedToMXN: (value*23.25).toFixed(3)
        })
  }

  handleChangeEUR = ({target: {name, value}}) => {
    console.log({[name]: value})
        this.setState({
            valueConvertedToEur: value,
            valueConvertedToUSD: (value*1.10).toFixed(3),
            valueConvertedToMXN: (value*25.47).toFixed(3)
        })
  }

  render () {
    const { valueConvertedToEur, valueConvertedToUSD, valueConvertedToMXN } = this.state
    return (
      <div className='Container'>

        <div>
        <Header
          title='Currency Converter'
          description='Conversor de divisas MXN-USD-EUR'
        />
          <form className='form'>
            <label>Moneda MXN</label>
            <input
              type='number'
              name='valueConvertedToMXN'
              value={valueConvertedToMXN}
              onChange={this.handleInput}
            />
            <label>Moneda USD</label>
            <input
              type='number'
              name='valueConvertedToUSD'
              value={valueConvertedToUSD}
              onChange={this.handleInput}
            />
            <label>Moneda EUR</label>
            <input
              type='number'
              name='valueConvertedToEur'
              value={valueConvertedToEur}
              onChange={this.handleInput}
            />
          </form>
        </div>
      </div>
    )
  }
}
