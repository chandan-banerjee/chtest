import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          See the magic. Edit <code>src/App.js</code> and save to reload Chandan.
        </p>
        <FirstComponent displaytext="First Component Data"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
