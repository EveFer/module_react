import React from 'react'

// CSS
import './Note.css'

function Note ({ title, content }) {
  return (
    <li className='note'>
      <div className='note-card'>
        <p><strong>{title}</strong></p>
        <p>{content}</p>
      </div>
    </li>
  )
}

export default Note
