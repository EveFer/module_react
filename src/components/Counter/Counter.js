import React, { Component } from 'react'

// Ejerccio

/**
 Crear un nuevo componente  <Counter />
 Easy pisi - El counter va iniciar en 0 y quiero que impriman en consola
 cuando el counter pase por un numero multiplo de 8

 Hard - Van a detener el contador cuando llegue a 20

 Additional - El contador puede ir de N en N, por medio de un prop
 */

export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  // se ejecuta una vez el component se haya montado
  componentDidMount () {
    this.counterInterval = setInterval(() => this.setCounter(), 1000)
  }

  componentDidUpdate () {
    const { counter } = this.state
    const { stop, mutliplo } = this.props
    if (counter % mutliplo === 0) {
      console.log(`${counter} es multiplo de 8`)
    }
    if (counter >= stop) {
      // this.setState({counter: 'Se a terminado'})
      clearInterval(this.counterInterval)
    }
  }

  setCounter () {
    const { counter } = this.state
    const { step } = this.props
    if (counter !== 0) {
      this.setState({ counter: counter + step })
      return
    }
    this.setState({ counter: counter + 1 })
  }

  componentWillUnmount () {
    if (this.counterInterval) clearInterval(this.counterInterval)
  }

  render () {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
      </div>
    )
  }
}
