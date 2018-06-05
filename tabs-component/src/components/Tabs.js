import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : 0
        };
    }

    handleClick(index, event) {
        event.preventDefault();
        this.setState({selected : index});
    }

    render() {
        return(
            <div className="tabs">
                <ul className="nav nav-tabs">
                    {this.props.children.map((child, index) => {
                        let activeClass = (this.state.selected === index ? 'active' : '');
                        return(
                            <li key={index} className="nav-item">
                                <a href="#" className={"nav-link " + activeClass}
                                    onClick={(evt) => this.handleClick(index, evt)}>{child.props.label}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className="tab-content">
                    {this.props.children[this.state.selected]}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired
};

export default Tabs;