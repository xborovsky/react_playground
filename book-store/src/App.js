import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateBook from './components/create-book/CreateBook';
import BookList from './components/book-list/BookList';
import MainMenu from './components/menu/MainMenu';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple book store app</h1>
        </header>
        <MainMenu />
        <div className="container">
          <Switch>
            <Route exact path="/" component={BookList} />
            <Route exact path="/create" component={CreateBook} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
