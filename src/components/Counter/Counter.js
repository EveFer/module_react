import React, { Component } from 'react';

// Ejerccio

/**
 Crear un nuevo componente  <Counter />
 Easy pisi - El counter va iniciar en 0 y quiero que impriman en consola
 cuando el counter pase por un numero multiplo de 8

 Hard - Van a detener el contador cuando llegue a 20

 Additional - El contador puede ir de N en N, por medio de un prop
 */

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 0
    }
  }
  componentDidMount() {
      this.setState({counter: this.props.numInit})
      this.counterInterval = setInterval(()=> this.setCounter(), 1000)
  }
  componentDidUpdate() {
      if(this.state.counter%8 === 0){
        console.log(`${this.state.counter} es multiplo de 8`)
      }
      if(this.state.counter > 20) { 
        this.setState({counter: 'Se a terminado'}) 
        clearInterval(this.counterInterval)
      }
  }
  setCounter() {
    if(this.state.counter !== 0) {
        this.setState({counter: this.state.counter + this.props.numInit })
        return
    }
    this.setState({counter: this.state.counter + 1 })
  }
  componentWillUnmount() {
    if(this.counterInterval) clearInterval(this.counterInterval)
  }
  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
      </div>
    )
  }
}