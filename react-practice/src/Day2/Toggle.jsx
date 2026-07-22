import React,{useState} from 'react'
import './Toggle.css';

const Toggle = () => {
    const[isVisible, setIsVisible] = useState(false);
  return (
    <div className="toggle-container">
            <button className="toggle-btn" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p className="toggle-message">🎉 You can see me now!</p>}
    </div>
  )
}

export default Toggle
