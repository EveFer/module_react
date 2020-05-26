import React, { Component } from 'react'

// CSS
import './NewNote.css'

export default class NewNote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddNote = this.handleAddNote.bind(this)
  }

  handleInputChange ({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  handleAddNote (event) {
    event.preventDefault()
    const { title, content } = this.state
    const note = {
      title,
      content
    }
    this.props.handleNewNote(note)
    this.setState({
      title: '',
      content: ''
    })
  }

  render () {
    return (
      <div className='Container'>
        <div>
          <form onSubmit={this.handleAddNote}>
            <div className='notes-form-content'>
              <div className='notes-inputs-content'>
                <div className='notes-group-form'>
                  <label>Title:</label>
                  <input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    placeholder='Titulo de la Nota'
                    name='title'
                  />
                </div>
                <div className='notes-group-form'>
                  <label>Content:</label>
                  <input
                    value={this.state.content}
                    onChange={this.handleInputChange}
                    placeholder='Contenido de la Nota'
                    name='content'
                  />
                </div>
              </div>
              <button className='btn' type='submit'>Add</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
