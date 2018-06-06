import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tooltip from './components/Tooltip';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Tooltip position="bottom" maxWidth={300} tooltipText={<div>This is some <strong>tooltiped</strong> text. Hover it!</div>}>
            <h3>Text with tooltip</h3>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default App;
