import React, { useState, useEffect } from 'react'
import './Clock.css'

const Clock = () => {
    const[time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(intervalId); 
    }, [])
    
 return (
    <div className="clock-container">
      <p className="clock-label">⏰ Live Clock</p>
      <h1 className="clock-time">{time}</h1>
    </div>
)
}

export default Clock
