import React, { Component } from 'react'

// components
import Header from '../../components/Header'
import Note from '../../components/Note'

export default class Notes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: [],
      title: '',
      content: ''
    }
    this.renderNotes = this.renderNotes.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddNote = this.handleAddNote.bind(this)
  }

  renderNotes () {
    const { notes } = this.state
    return notes.map(({ title, content }) => {
      return <Note title={title} content={content} />
    })
  }

  handleInputChange ({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  handleAddNote (event) {
    event.preventDefault()
    const { notes, title, content } = this.state
    const note = {
      title,
      content
    }
    this.setState({
      notes: [...notes, note]
    })
  }

  render () {
    return (
      <div className='Container'>
        <div>
          <Header
            title='Kodemia Modulo 3'
            description='Estoy en Notes'
          />
          <div className='Notes-container'>
            <ul>{this.renderNotes()}</ul>
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
        </div>
      </div>
    )
  }
}
