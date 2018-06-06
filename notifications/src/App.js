import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notification from './components/Notification';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notification : null
    };
  }

  setNotification(type, text, closeable, duration) {
    this.setState({notification: {type, text, closeable, duration}});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="content">
          <button type="button" onClick={() => this.setNotification('primary', 'Test primary notification.')}>Primary</button>
          <button type="button" onClick={() => this.setNotification('secondary', 'Test secondary notification.', true)}>Secondary</button>
          <button type="button" onClick={() => this.setNotification('success', 'Test success notification.', false, 10000)}>Success</button>
          <button type="button" onClick={() => this.setNotification('danger', 'Test danger notification.')}>Danger</button>
          <button type="button" onClick={() => this.setNotification('warning', 'Test warning notification.')}>Warning</button>
          <button type="button" onClick={() => this.setNotification('info', 'Test info notification.')}>Info</button>
          <button type="button" onClick={() => this.setNotification('light', 'Test light notification.')}>Light</button>
          <button type="button" onClick={() => this.setNotification('dark', 'Test dark notification.')}>Dark</button>

          {this.state.notification ?
            <Notification type={this.state.notification.type}
                          text={this.state.notification.text}
                          closeable={this.state.notification.closeable}
                          duration={this.state.notification.duration} />
            : null}
        </div>
      </div>
    );
  }
}

export default App;
