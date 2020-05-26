import React, { Component } from 'react'

// CSS
import './Clock.css'

export default class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount () {
    this.dateInterval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.dateInterval)
  }

  tick () {
    this.setState({ date: new Date() })
  }

  render () {
    // console.log('Desde el render')
    const { date } = this.state
    return (
      <div className='clock-digital'>
        <span>{date.toLocaleTimeString()}</span>
      </div>
    )
  }
}
