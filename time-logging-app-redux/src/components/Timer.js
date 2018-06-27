import React, { Component } from 'react';
import { formatTimerStr } from '../utils/time-util';
import TimerForm from './TimerForm';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime : null,
            elapsed : 0,
            edit : false
        };
    }

    componentWillUnmount() {
        this.resetTimer();
    }

    startTimer = () => {
        this.setState({
            startTime : new Date()
        });
        this.forceUpdateInterval = setInterval(() => {
            this.setState({elapsed : new Date() - this.state.startTime});
        }, 50);
    };

    resetTimer = () => {
        this.setState({
            startTime : null,
            elapsed : 0
        });
        clearInterval(this.forceUpdateInterval);
    };

    deleteTimer = () => {
        if (window.confirm('Do you really want to delete this timer?')) {
            this.props.onDeleteTimer(this.props.timer.id);
            return true;
        } else {
            return false;
        }
    };

    handleEditTimer = () => {
        this.setState({
            edit : true
        });
    };

    handleEditTimerCancel = () => {
        this.setState({
            edit : false
        });
    };

    handleEditTimerSave = (id, title, project) => {
        this.props.onEditTimer(id, title, project);
        this.handleEditTimerCancel();
    };

    render() {
        const { timer } = this.props;
        const { startTime, elapsed, edit } = this.state;

        if (!edit) {
            return (
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{timer.title}<small>({timer.project})</small></h4>
                        <p className="card-text text-center time">
                            {startTime ? formatTimerStr(elapsed) : "00:00:00"}
                        </p>
                        <p className="card-text text-right timer-management">
                            <i className="fas fa-edit" onClick={this.handleEditTimer}></i>
                            &nbsp;&nbsp;&nbsp;
                            <i className="fas fa-trash-alt" onClick={this.deleteTimer}></i>
                        </p>
                        <div className="btn-group">
                            <button className="btn btn-primary" onClick={this.startTimer} disabled={!!startTime}><i className="fas fa-play"></i> Start</button>
                            <button className="btn btn-danger" onClick={this.resetTimer} disabled={!startTime}><i className="fas fa-stop"></i> Reset</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <TimerForm id={timer.id} title={timer.title} project={timer.project} onAddTimerCancel={this.handleEditTimerCancel} onAddTimer={this.handleEditTimerSave} />
            );
        }
    }
}

export default Timer;