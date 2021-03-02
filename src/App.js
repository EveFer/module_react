import React, { Component } from 'react'

const arrayPost = [
  {
    id: 1,
    title: 'My first Post',
    text: 'sdnd',
    date: '2020-09-09'
  },
  {
    id: 2,
    title: 'My second Post',
    text: 'sdnd',
    date: '2020-09-09'
  },
  {
    id: 2,
    title: 'My third Post',
    text: 'sdnd',
    date: '2020-09-09'
  }
]
class App extends Component {
  render () {
    return (
      <div>
        {
          arrayPost.map(({ title, text, date, id }) => (
            <div key={id}>
              title: {title}
            </div>
          ))
        }
      </div>
    )
  }
}

export default App
