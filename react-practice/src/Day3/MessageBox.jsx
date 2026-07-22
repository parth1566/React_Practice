import React from 'react'
import './Message.css'

const MessageBox = (props) => {
  return (
    <div className=''>
        <textarea type="text" onChange={(e) => props.setMessage(e.target.value)}/>
    </div>
  )
}

export default MessageBox
