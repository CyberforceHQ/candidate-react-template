import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src="/form.html"
        title="Multi-Step Form"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0
        }}
      />
    </div>
  );
}

export default App;
