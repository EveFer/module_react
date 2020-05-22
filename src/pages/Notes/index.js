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
    this.onHandleNewNote = this.onHandleNewNote.bind(this)
  }

  componentDidMount () {
    fetch('https://reactsessions-ac545.firebaseio.com/.json')
      .then((response) => { // primer then - recibe el cuerpo de la respuesta
        console.table(response)
        return response.json()
      })
      .then(({ notes }) => {
        // let arrayFromNotes = Object.entries(data.notes)
        // arrayFromNotes = arrayFromNotes.map(note => {
        //   const key = note[0]
        //   return { ...note[1], key }
        // })
        const arrayNotes = []
        for (const key in notes) {
          arrayNotes.push({
            key,
            title: notes[key].title,
            content: notes[key].content
          })
        }
        this.setState({ notes: arrayNotes })
        // return array
      }) // segundo then - recibe el data
  }

  renderNotes () {
    const { notes } = this.state
    return notes.map(({ key, title, content }) => {
      return <Note key={key} title={title} content={content} />
    })
  }

  onHandleNewNote (note) {
    const { notes } = this.state
    fetch('https://reactsessions-ac545.firebaseio.com/notes.json',
      {
        method: 'POST',
        body: JSON.stringify(note),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => response.json())
      .then((data) => {
        const { name } = data
        note.key = name
        this.setState({
          notes: [...notes, note]
        })
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
            <NewNote handleNewNote={this.onHandleNewNote} /> {/* Pasar el cuerpo de la funcion como prop al hijo */}
          </div>
        </div>
      </div>
    )
  }
}
