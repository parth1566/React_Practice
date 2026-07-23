import React, { useState } from 'react'
import './Form.css'

const SimpleForm = () => {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedName(name);
        setName("");
    }

    return (
        <div className="form-container">
            <h2 className="form-title">📝 Simple Form</h2>

            <form className="simple-form" onSubmit={handleSubmit}>
                <input 
                    className="form-input"
                    type="text" 
                    placeholder="Enter your name..." 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="form-btn" type="submit">Submit</button>
            </form>

            {submittedName && <p className="form-greeting">Hello, {submittedName}! 🎉</p>}
        </div>
    )
}

export default SimpleForm;