import React, { Component } from 'react';

class TimerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : props.id || null,
            title : props.title || '',
            project : props.project || ''
        };
    }

    componentDidMount() {
        this.titleInput.focus();
    }

    onTitleChange = (e) => {
        this.setState({title : e.target.value});
    };

    onProjectChange = (e) => {
        this.setState({project : e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTimer(this.state.id, this.state.title, this.state.project);
    };

    onCancel = () => {
        this.props.onAddTimerCancel();
    };

    render() {
        const {title, project} = this.state;

        return (
            <form onSubmit={this.onSubmit} onReset={this.onCancel}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" defaultValue={title || ''} className="form-control"
                           onChange={this.onTitleChange} autoComplete="off"
                           ref={(input) => { this.titleInput = input; }} />
                </div>
                <div className="form-group">
                    <label htmlFor="project">Project</label>
                    <input type="text" name="project" id="project" defaultValue={project || ''} className="form-control" onChange={this.onProjectChange} autoComplete="off" />
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" disabled={!title.length || !project.length}>Submit</button>
                        <button type="reset" className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </form>
        );
    }
};

export default TimerForm;