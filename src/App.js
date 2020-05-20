import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'

import Counter from './components/Counter/Counter'
import Button from './components/Button'

import Notes from './components/Notes'

import Form from './components/Form'

import CondicionalRedering from './components/CondicionalRedering'

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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bootcamp White - <strong>React</strong>
          </h1>
          {/* <Clock />

          <Counter step={1} stop={20} multiplo={2}/>
          <Button/> */}

          {/* <Notes /> */}

          {/* <Form /> */}

          <CondicionalRedering />
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
