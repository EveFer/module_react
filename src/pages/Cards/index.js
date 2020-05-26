import React, { Component } from 'react'

import Header from '../../components/Header'
import Card from '../../components/Card'

const DATA = [
  {
    key: '232k4o23e2',
    category: 'POPULAR ON MEDIUM',
    title: 'JavaScript Best Practices — Code That We Shouldn’t Have',
    description: 'Bad case statements, unclear decimals and type conversions, and more.',
    author: 'John Au-Yeung in The Startup',
    publicationDate: 'Apr 29',
    readTime: '2 min read'
  },
  {
    key: '232kdo33e2',
    category: 'POPULAR ON MEDIUM',
    title: 'JavaScript Best Practices — Code That We Shouldn’t Have',
    description: 'Bad case statements, unclear decimals and type conversions, and more.',
    author: 'John Au-Yeung in The Startup',
    publicationDate: 'Apr 29',
    readTime: '2 min read'
  },
  {
    key: '232kdo2332',
    category: 'POPULAR ON MEDIUM',
    title: 'JavaScript Best Practices — Code That We Shouldn’t Have',
    description: 'Bad case statements, unclear decimals and type conversions, and more.',
    author: 'John Au-Yeung in The Startup',
    publicationDate: 'Apr 29',
    readTime: '2 min read'
  }
]

export default class Cards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: DATA
    }
    this.printCards = this.printCards.bind(this)
  }

  printCards () {
    const { posts } = this.state
    return posts.map(({
      key,
      category,
      title,
      description,
      author,
      publicationDate,
      readTime
    }) => (
      <Card
        key={key}
        category={category}
        title={title}
        description={description}
        author={author}
        publicationDate={publicationDate}
        readTime={readTime}
      />
    ))
  }

  render () {
    return (
      <div className='Container'>
        <div>
          <Header
            title='React - Props'
            description='In this class we learned about Props'
          />
          {this.printCards()}
        </div>
      </div>
    )
  }
}
