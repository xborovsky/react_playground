import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : true,
            timeout : null
        };
    }

    componentDidMount() {
        let timeout = setTimeout(() => this.handleClose(), this.props.duration || 3000);
        this.setState({timeout});
    }

    componentWillReceiveProps(nextProps) {
        this.doClearTimeout();
        this.setState({
            open : true,
            timeout : setTimeout(() => this.handleClose(), this.props.duration || 3000)
        });
    }

    handleClose() {
        this.setState({open : false});
        this.doClearTimeout();
    }

    doClearTimeout() {
        if (this.state.timeout) {
            clearTimeout(this.state.timeout);
        }
        this.setState({timeout : null});
    }

    render() {
        let {type, text, closeable, duration} = this.props;

        return (
            this.state.open ?
                <div className={"alert alert-" + type + (closeable ? ' alert-dismissible' : '')} role="alert">
                    {text}
                    {closeable ?
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.handleClose()}>
                            <span aria-hidden="true">&times;</span>
                        </button> : ''
                    }
                </div> :
                null
        );
    }
}

Notification.propTypes = {
    type : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    text : PropTypes.string,
    closeable : PropTypes.bool,
    duration : PropTypes.number
};

export default Notification;