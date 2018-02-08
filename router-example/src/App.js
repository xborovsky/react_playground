import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Home'; 
import Test from './Test'; 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link>
            <Link to="/test">Test</Link>
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
