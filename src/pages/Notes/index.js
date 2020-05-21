import React, { Component } from 'react'

// components
import Header from '../../components/Header'
import Note from '../../components/Note'

// CUSTOM Component
import NewNote from './components/NewNote'

export default class Notes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: []
    }
    this.renderNotes = this.renderNotes.bind(this)
  }

  renderNotes () {
    const { notes } = this.state
    return notes.map(({ title, content }) => {
      return <Note title={title} content={content} />
    })
  }

  handleNewNote = (note) => {
    const { notes } = this.state
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
            <NewNote handleNewNote={this.handleNewNote} /> {/* Pasar el cuerpo de la funcion como prop al hijo */}
          </div>
        </div>
      </div>
    )
  }
}
