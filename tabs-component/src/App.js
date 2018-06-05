import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import Pane from './components/Pane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Tabs selected={0}>
            <Pane label="Tab 1">
              <div className="tab-pane fade show">This is my tab 1 contents!</div>
            </Pane>
            <Pane label="Tab 2">
              <div className="tab-pane fade show">This is my tab 2 contents!</div>
            </Pane>
            <Pane label="Tab 3">
              <div className="tab-pane fade show">This is my tab 3 contents!</div>
            </Pane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
