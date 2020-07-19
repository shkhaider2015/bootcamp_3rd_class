import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dishes.js'

function App() {
  return (
    <div className="App">
        <h1>Main App component</h1>
        <Dinner value="1" />
        <Dinner value="2" />
        <Dinner value="3" />
    </div>
  );
}

export default App;
