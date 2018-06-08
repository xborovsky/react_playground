import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConnectedSearch from './components/Search';
import ConnectedSearchResults from './components/SearchResults';
import { connect } from 'react-redux';
import { fetchData } from './redux/thunks';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch = (searchText) => {
    this.props.doSearch(searchText);
  }

  handleLoadNext = (pageNum) => {
    this.props.doSearch(this.props.searchText, pageNum);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <h1>Search on 500px</h1>
          <ConnectedSearch onSearchChange={this.handleSearch} />
          <ConnectedSearchResults onLoadNext={this.handleLoadNext} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchText : state.searchText
});

const mapDispatchToProps = dispatch => ({
  doSearch: (text, pageNum) => dispatch(fetchData(text, pageNum))
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
