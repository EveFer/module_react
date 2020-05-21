import React, { Component } from 'react'

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
  }

  render () {
    return (
      <div className='Container'>
        <div>
          <form onSubmit={this.handleAddNote}>
            <div className='Notes-form-content'>
              <div className='Notes-inputs-content'>
                <input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder='Titulo de la Nota'
                  name='title'
                />
                <input
                  value={this.state.content}
                  onChange={this.handleInputChange}
                  placeholder='Contenido de la Nota'
                  name='content'
                />
              </div>
              <button type='submit'>Add</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
