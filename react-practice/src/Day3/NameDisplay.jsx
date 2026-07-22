import React from 'react'
import './NameStyle.css'

const NameDisplay = (props) => {
  return(
    <div>
      <h1 className='name-greeting'>Hello {props.name}</h1>;
    </div>
   
)
}

export default NameDisplay
