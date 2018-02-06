import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Weather from './weather/Weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location : {
        lastLat : 0,
        lastLong : 0
      },
      weather : {
        icon : '',
        description : '',
        temp : 0,
        humidity : 0,
        wind : 0
      }
    };
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.onRegionChange(position.coords.latitude, position.coords.longitude);
      this.fetchData();
    });
  }

  onRegionChange(lastLat, lastLong) {
    this.setState({
      location: {
        lastLat: lastLat || this.state.lastLat,
        lastLong: lastLong || this.state.lastLong
      }
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  fetchData() {
    const API_KEY = '21680c895598f666908b329b5fb62354';
    const API_URL = 'http://localhost:1337/api.darksky.net/forecast/' + API_KEY + '/';
    axios.get(API_URL + this.state.location.lastLat + ',' + this.state.location.lastLong)
      .then(res => {
        console.log(res.data.currently);
        this.setState({
          weather : {
            icon : res.data.currently.icon,
            description : res.data.currently.summary,
            temp : res.data.currently.temperature,
            humidity : res.data.currently.humidity,
            wind : res.data.currently.windSpeed
          }
        });
      });
  }

  render() {
    return (
      <div>
        <Weather weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
