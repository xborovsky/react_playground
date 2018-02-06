import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './Images';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error : null,
      isLoaded : false,
      items : []
    };
  }

  handleTrendingGifs(limit) {
    limit = limit || 10;
    const apiKey = 'gMikKQquooPgdlcakgmmqvfUY8P83vq9';
    fetch('http://localhost:1337/api.giphy.com/v1/gifs/trending?api_key=' + apiKey + '&limit=' + limit)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded : true,
          items : result.data
        });
      }, (error) => {
        console.error(error);
        this.setState({
          isLoaded : true,
          items : []
        });
      });
  }

  randomize() {
    if (!this.state.items.length) {
      this.handleTrendingGifs();
    }

    var items = this.state.items.slice();
    var j, x, i;
    for (i = items.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = items[i];
        items[i] = items[j];
        items[j] = x;
    }
    this.setState({
      items : items
    });
  }

  reverse() {
    if (!this.state.items.length) {
      this.handleTrendingGifs();
    }

    var items = this.state.items.slice();
    this.setState({
      items : items.reverse()
    });
  }

  clear() {
    this.setState({
      items : []
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleTrendingGifs()}>Load trending</button>
        <button onClick={() => this.handleTrendingGifs(1)}>Load one</button>
        <button onClick={() => this.randomize()}>Randomize order</button>
        <button onClick={() => this.reverse()}>Reverse order</button>
        <button onClick={() => this.clear()}>Clear</button>
        <Images images={this.state.items} />
      </div>
    );
  }
}

export default App;
