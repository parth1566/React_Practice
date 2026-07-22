import React from 'react'
import './Message.css'

const CharCounter = (props) => {
    
  return (
    <div>
       <p className="char-count">Characters: <span>{props.message.length}</span> / 100</p>
{props.message.length > 100 && <p className="char-warning">⚠️ Too long!</p>}
    </div>
  )
}

export default CharCounter
