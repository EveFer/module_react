import React, { Component } from 'react'

// Components
import Header from '../../components/Header'

// custom components
import Form from './components/form'
// CSS
import './CreditCard.css'

export default class CreditCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      creditData: {}
    }
    this.handlerCardWrite = this.handlerCardWrite.bind(this)
  }

  handlerCardWrite (creditData) {
    this.setState({
      creditData
    })
  }

  render () {
    const { cvc, expiry, owner, number } = this.state.creditData
    return (
      <div className='Container'>
        <div>
          <Header
            title='Credit Card'
            description='xD'
          />

          <div className='form'>
            <Form handlerCardWrite={this.handlerCardWrite} />
          </div>

          <div className='wrapper-content'>
            <div className='credit-1 credit-boder'>
              <p>{number}</p>
              <p>{owner}</p>  <span>{expiry}</span>
            </div>
            <div className='credit-2 credit-boder'>
              <span>{cvc}</span>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
