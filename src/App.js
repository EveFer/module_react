import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'

const DATA = [
  {
    category: 'POPULAR ON MEDIUM', 
    title: 'JavaScript Best Practices — Code That We Shouldn’t Have', 
    description: 'Bad case statements, unclear decimals and type conversions, and more.',
    author: 'John Au-Yeung in The Startup', 
    publicationDate: 'Apr 29',
    readTime: '2 min read'
  },
  {
    category: 'POPULAR ON MEDIUM', 
    title: 'JavaScript Best Practices — Code That We Shouldn’t Have', 
    description: 'Bad case statements, unclear decimals and type conversions, and more.',
    author: 'John Au-Yeung in The Startup', 
    publicationDate: 'Apr 29',
    readTime: '2 min read'
  },
  {
    category: 'POPULAR ON MEDIUM', 
    title: 'JavaScript Best Practices — Code That We Shouldn’t Have', 
    description: 'Bad case statements, unclear decimals and type conversions, and more.',
    author: 'John Au-Yeung in The Startup', 
    publicationDate: 'Apr 29',
    readTime: '2 min read'
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
          <Clock />
        </header>

        <div className="cards-container">
         {
          //  DATA.map(({category, title, description, author, publicationDate, readTime}) => 
          //  (<Card category={category} title={title} description={description} author={author} publicationDate={publicationDate} readTime={readTime} />)
          //  )

          this.printCards()

         }
        </div>

        
        {/* <Clock /> */}
    </div>
    )
    
  }
}

// export default App;
