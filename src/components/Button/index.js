import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
      super(props)
      this.state = {
        counterClick: 0,
        counterOver: 0
      }
      // this.handleClick = this.handleClick.bind(this) // darle acceso al contexto de la clase
    }

    handleClick = () => {
      console.log('Me clicked')
      let { counterClick } = this.state
      this.setState({ counterClick: counterClick + 1})
    }

    handleOver = () => {
      let {counterOver} = this.state
      this.setState({ counterOver: counterOver + 1})
    }

    render() { 
      return(
        <div>
          {/* <p>llevas {this.state.counterClick} clicks</p> */}
          {/* <button onClick={this.handleClick}>Click me!!</button> */}
          <p onMouseOver={this.handleOver}>Esruvo sobre mi {this.state.counterOver}</p>
        </div>
      )
    }
}