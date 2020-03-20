import React from 'react';
import logo from './ui/Logo.svg';
import './App.css';
import Questionnaire from './views/questionnaire';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <p>
          Goin back to my roots!
        </p>
        <Questionnaire />
      </header>
    </div>
  );
}

export default App;
