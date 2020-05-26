import React from 'react'

// components
import Header from '../../components/Header'
import ClockTime from '../../components/Clock'

function Clock () {
  return (
    <div className='Container'>
      <div>
        <Header
          title='React - Component'
          description='In this class we learned about Components'
        />
        <ClockTime />
      </div>
    </div>
  )
}

export default Clock
