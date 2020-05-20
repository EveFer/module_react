import React, { Component } from 'react';

export default class Notes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newNote: {}
    }
  }

  renderNotes() {
    const {notes} = this.state
    return notes.map(({title, content}) => {
      return (
        <div>
          <p>{title}</p>
          <p>{content}</p>
        </div>
      )
    })
  }

  handleChange = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    let { newNote } = this.state
    newNote[event.target.name] = event.target.value
    this.setState({ newNote })
  }

  addNote = (note) => {
    const {newNote, notes} = this.state
    const newNotes = [...notes, newNote]
    this.setState({
      notes: newNotes
    })
  }

  render() {
    return (
      <div>
        <div className="notes">
          {this.renderNotes()}
        </div>
        <div>
          <input onChange={event => this.handleChange(event)} name="title" placeholder="Ingresa titulo" />
          <input onChange={event => this.handleChange(event)} name="content" placeholder="Ingresa content" />
          <button onClick={this.addNote}>Add</button>
        </div>
      </div>
    )
  }

}