import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <h1>Welcome!</h1>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <h1>Login Form</h1>
            <input type="email" placeholder="Enter your email" />
            <br />
            <label>
              Password:
              <input type="password" />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        )}
      </header>
    </div>
  );
}

export default App;