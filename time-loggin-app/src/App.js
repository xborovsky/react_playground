import React, { Component } from 'react';
import './App.css';
import CreateTimer from './components/CreateTimer';
import TimerForm from './components/TimerForm';
import Timer from './components/Timer';
import uuidv4 from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers : [],
      createFormVisible : false
    };
  }

  toggleCreateForm = () => {
    this.setState(prevState => ({
      createFormVisible : !prevState.createFormVisible
    }));
  };

  handleAddTimer = (id, title, project) => {
    if (id !== null) {
      var timers = [...this.state.timers];
      var selectedTimerIdx = timers.findIndex((element) => element.id === id);
      timers[selectedTimerIdx].title = title;
      timers[selectedTimerIdx].project = project;
      this.setState({timers});
    } else {
      this.setState({
        timers : [...this.state.timers, {id: uuidv4(), title, project}]
      });
      this.toggleCreateForm();
    }
  };

  handleDeleteTimer = (id) => {
    var timers = [...this.state.timers];
    var selectedTimerIdx = timers.findIndex((element) => element.id === id);
    timers.splice(selectedTimerIdx, 1);
    this.setState({timers});
  };

  render() {
    const { timers, createFormVisible } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-xs-12 col-md-10 col-lg-6">
              <h1>Timers</h1>
              <hr />
              { timers.map((timer, cnt) => <Timer key={timer.id} timer={timer} onDeleteTimer={this.handleDeleteTimer} onEditTimer={this.handleAddTimer} />) }
              { createFormVisible ?
                  <TimerForm onAddTimer={this.handleAddTimer} onAddTimerCancel={this.toggleCreateForm} /> :
                  <CreateTimer onClicked={this.toggleCreateForm} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
