import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'

const DATA = [
  {
    category: 'Programing', 
    title: 'JS', 
    description: 'Programming languages',
    author: 'Fernanda', 
    publicationDate: '2017-23-12',
    readTime: '2 min'
  },
  {
    category: 'Programing 2', 
    title: 'JS', 
    description: 'Programming languages',
    author: 'Fernanda', 
    publicationDate: '2017-23-12',
    readTime: '2 min'
  },
  {
    category: 'Programing 3', 
    title: 'JS', 
    description: 'Programming languages',
    author: 'Fernanda', 
    publicationDate: '2017-23-12',
    readTime: '2 min'
  }
]

export default class App extends Component {
  
  printCards() {
    return DATA.map(({
                  category, 
                  title, 
                  description, 
                  author, 
                  publicationDate, 
                  readTime
                }) => (
                <Card 
                  category={category} 
                  title={title} 
                  description={description} 
                  author={author} 
                  publicationDate={publicationDate} 
                  readTime={readTime} />
                ))
  }

  render() {
    let articles = DATA
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bootcamp White - <strong>React</strong>
          </h1>
        </header>

        <div className="cards-container">
         {
          //  DATA.map(({category, title, description, author, publicationDate, readTime}) => 
          //  (<Card category={category} title={title} description={description} author={author} publicationDate={publicationDate} readTime={readTime} />)
          //  )

          this.printCards(DATA)

         }
        </div>

        
        {/* <Clock /> */}
    </div>
    )
    
  }
}

// export default App;
