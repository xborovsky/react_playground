import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      recentSortAsc : false,
      allTimeSortAsc : false
    };
  }

  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) => {
        return response.json();
      }).then((result) => {
        this.setState({ users : result })
      }, 
      (error) => {
        console.error(error);
      });
  }

  doSortBy(users, sort, asc) {
    users = users.sort((u1, u2) => {
      return u1[sort] < u2[sort] ? (asc ? -1 : 1) :
        u1[sort] > u2[sort] ? (asc ? 1 : -1) : 0;
    });
    this.setState({ users : users });
  }

  sortBy(users, sort) {
    switch (sort) {
      case 'recent':
        this.setState((prevState) => { return { recentSortAsc : !prevState.recentSortAsc }; });
        this.doSortBy(users, sort, this.state.recentSortAsc);
        break;
      case 'alltime':
        this.setState((prevState) => { return { allTimeSortAsc : !prevState.allTimeSortAsc }; });
        this.doSortBy(users, sort, this.state.allTimeSortAsc);
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.sortBy(this.state.users.slice(), 'recent')}>Sort by recent</button>
        <button onClick={() => this.sortBy(this.state.users.slice(), 'alltime')}>Sort by all time</button>
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
