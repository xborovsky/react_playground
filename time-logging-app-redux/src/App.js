import React, { Component } from 'react';
import './App.css';
import CreateTimer from './components/CreateTimer';
import TimerForm from './components/TimerForm';
import Timer from './components/Timer';
import uuidv4 from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTimer, editTimer, deleteTimer } from './redux/action-creators';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.props.editTimer(id, {title, project});
    } else {
      this.props.addTimer({id: uuidv4(), title, project});
      this.toggleCreateForm();
    }
  };

  handleDeleteTimer = (id) => {
    this.props.deleteTimer(id);
  };

  render() {
    const { timers } = this.props;
    const { createFormVisible } = this.state;

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

const mapStateToProps = (state) => {
  return {
    timers : state.timers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTimer : timer => dispatch(addTimer(timer)),
    editTimer : (id, timer) => dispatch(editTimer(id, timer)),
    deleteTimer : id => dispatch(deleteTimer(id))
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

App.propTypes = {
  timers : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.string.isRequired,
      title : PropTypes.string.isRequired,
      project : PropTypes.string.isRequired
    })
  )
};

export default App;
