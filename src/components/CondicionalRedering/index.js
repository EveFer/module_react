import React, { Component } from 'react'
import './CondicionalRendering.css'

export default class CondicionalRedering extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isClicked: false
        }
    }
    handleClickButton = (e) => {
        let { isClicked } = this.state
        isClicked = isClicked ? false : true
        this.setState({ isClicked })
    }
    render() {
        const { isClicked } = this.state
        let elementToShow = null
        if(isClicked) {
            elementToShow = <div className="bg-red"></div>
        }
        return (
            <div>
                <h1>Condicional Rendering</h1>
                <button onClick={this.handleClickButton}>Click me!!</button>
                {elementToShow}
            </div>
        )
    }
}

// Al dar click a un button, redenrizar un div de un color (el que sea)
// al dar un segundo click, desaparece el div