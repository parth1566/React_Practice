import React from 'react'
import './Temp.css'

const CelsiusInput = (props) => {
  return (
    <div>
      <label>Celsius: </label>
      <input type='number' value={props.celsius} onChange={(e) => props.setCelsius(e.target.value)} />
    </div>
  )
}

export default CelsiusInput
