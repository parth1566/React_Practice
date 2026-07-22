import React from 'react'
import './Temp.css'

const FahrenheitInput = (props) => {
  return (
    <div>
      <label>Fahrenheit: </label>
      <input 
        type="number"
        value={(props.celsius * 9) / 5 + 32}
        onChange={(e) => props.setCelsius(((e.target.value - 32) * 5) / 9)}
      />
    </div>
  )
}

export default FahrenheitInput