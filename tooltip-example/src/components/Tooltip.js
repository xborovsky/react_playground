import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        };
    }

    toggleTooltip() {
        this.setState({visible : !this.state.visible});
    }

    getTooltipStyle() {
        let tooltipStyle = {
            display : (this.state.visible ? 'block' : 'none'),
            width : (this.props.maxWidth ? this.props.maxWidth : 150) + 'px'
        };

        if (this.props.position === 'top' || this.props.position == 'bottom') {
            tooltipStyle['marginLeft'] = (this.props.maxWidth ? this.props.maxWidth / 2 * (-1) : -75) + 'px';
        }

        return tooltipStyle;
    }

    render() {


        return (
            <div style={{position: 'relative', display: 'inline-block'}}>
                <div className={"tooltip " + (this.props.position ? this.props.position : 'top')}
                    style={this.getTooltipStyle()}>

                    <div className="tooltip-inner">
                        {this.props.tooltipText}
                    </div>
                </div>
                <div onMouseOver={() => this.toggleTooltip()} onMouseOut={() => this.toggleTooltip()}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Tooltip.propTypes = {
    position : PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    maxWidth : PropTypes.number
};

export default Tooltip;