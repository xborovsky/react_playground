import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ContactDetail from './ContactDetail';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <header className="jumbotron">
              <h1 className="App-title">Address book made with React</h1>
            </header>
          </div>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/contact-detail/:id" component={ContactDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
