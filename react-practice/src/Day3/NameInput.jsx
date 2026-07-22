import React from 'react'
import './NameStyle.css'

const NameInput = (props) => {
    return(
        <div>
         <input className='name-input' type='text' onChange={(e) => props.setName(e.target.value)}/>
        </div>
)
}

export default NameInput
