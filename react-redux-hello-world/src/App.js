import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { activateGeod, closeGeod } from './redux/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <h1>{this.props.geod.title || 'Hello world!'}</h1>

          {this.props.geod.title ?
            <button onClick={this.props.closeGeod}>Exit geod</button> :
            <button onClick={() => this.props.activateGeod({title : 'I am geo dude!'})}>Click me!</button>
          }

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  geod : state.geod
});

const mapDispatchToProps = {
  activateGeod, closeGeod
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
