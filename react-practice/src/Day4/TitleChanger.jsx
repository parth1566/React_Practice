import React, { useState, useEffect } from 'react'
import './TitleChanger.css'

const TitleChanger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="title-container">
      <p className="title-heading">Look at your browser tab! 👀</p>
      <h1 className="title-count">{count}</h1>
      <button className="title-btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default TitleChanger