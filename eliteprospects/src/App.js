import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './search/Search';
import Players from './players/Players';
import Player from './players/Player';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Teams from './teams/Teams';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route path='/' exact={true} component={Search} />
            <Route path='/players' component={Players} />
            <Route path='/player/:id' component={Player} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
