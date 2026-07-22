import React, { useState } from 'react'
import './Auth.css'

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="auth-container">
      {isLoggedIn ? <h2 className="auth-message">Welcome back, Parth! 🎉</h2> : <h2 className="auth-message">Please log in 🔒</h2>}
      
      <button 
        className={isLoggedIn ? "auth-btn logout-btn" : "auth-btn login-btn"}
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default AuthButton