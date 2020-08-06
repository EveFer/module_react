import React, { useState, useEffect } from 'react'

import Header from '../../components/Header'

import './Hooks.css'

function Hook () {
  const [count, setCount] = useState(0)
  const [titleInput, setTitle] = useState('')

  //   ciclos de viad en una sola function
  useEffect(() => {
    console.log('la primera vez y ya')
  }, [])

  useEffect(() => {
    console.log('For Ever')
  })

  useEffect(() => {
    console.log('Solo al input')
  }, [titleInput])

  return (
    <div className='Container'>
      <div>
        <Header
          title='Hooks in React'
          description='Hooks'
        />
        <p>Me clicked {count} ve{count === 1 ? 'z' : 'ces'}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>

        <input type='' value={titleInput} onChange={({ target: { value } }) => setTitle(value)} placeholder='' />
      </div>
    </div>
  )
}

export default Hook
