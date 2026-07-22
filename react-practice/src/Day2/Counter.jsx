import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h1 className="count-display">{count}</h1>
            <div className="button-group">
                <button className="btn-plus" onClick={() => setCount(count + 1)}>+1</button>
                <button className="btn-minus" onClick={() => setCount(count - 1)}>-1</button>
                <button className="btn-reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;