import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from './Persons';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    let names = [
      'Marek Borovský', 'Kelsey Aubrecht', 'Ondřej Zeman',
      'Filip Filipovič', 'Filip Svoboda'
    ];
    this.state = {
      allNames : names,
      names : names.slice(),
      searchText : ''
    };
  }

  onChangeHandler(e) {
    let val = e.target.value;
    let newNames = this.state.allNames.slice();
    if (val && val.length) {
      newNames = newNames.filter(function(item) {
        return item.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1;
      });
    }

    this.setState({ 
      searchText : val,
      names : newNames
     });
  }

  render() {
    return (
      <div className="App">
        <Search onChange={this.onChangeHandler.bind(this)} />
        <Persons persons={this.state.names} />
      </div>
    );
  }
}

export default App;
