import React from 'react'
import { useState, useEffect } from 'react'
import './Event.css'



const EventBox = () => {
    const[status, setStatus] = useState("Waiting for action");

    function handleMouseOver() {
      setStatus("Mouse entered");
    }

    function handleOnMouseOut() {
      setStatus("Mouse left");
    }

    function handleOnClick() {
      setStatus("Clicked");
    }

    function handleOnDoubleClick() {
      setStatus("Double clicked");
    }

    function handleOnFocus() {
      setStatus("Input focused");
    }

    function handleOnBlur() {
      setStatus("Input left");
    }

    function handleOnKeyDown(e) {
      setStatus(`Key pressed: ${e.key}`);
    }

  return (
    <div className='event-container'>
      <h2  className="event-status">{status}</h2>
        <div  className="event-box" onMouseOver={handleMouseOver} onMouseOut={handleOnMouseOut} onClick={handleOnClick} onDoubleClick={handleOnDoubleClick}>
          Interact with me!
        </div>
        <input className="event-input" type="text" placeholder='Type here.....' onFocus={handleOnFocus} onBlur={handleOnBlur} onKeyDown={handleOnKeyDown} />
    </div>
  )
}

export default EventBox
