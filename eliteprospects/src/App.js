import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './search/Search';
import Players from './players/Players';
import Player from './players/Player';
import Teams from './teams/Teams';
import Team from './teams/Team';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
            <Route path='/teams' component={Teams} />
            <Route path='/team/:id' component={Team} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
