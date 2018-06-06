import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { filterData } from '../services/data.service';
import AutocompleteItems from './AutocompleteItems';

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData : [],
            searchStr : null
        };
    }

    handleInput = (evt) => {
        const val = evt.target.value;
        this.setState({
            searchStr : val
        });

        if (val.length < this.props.minCnt) {
            this.setState({filteredData: []});
            return;
        }
        const filteredData = filterData(this.props.data, val);
        this.setState({filteredData});
    }

    render() {
        return (
            <div className="autocomplete">
                <input type="text" placeholder="Start typing..." onChange={this.handleInput} />
                {
                    this.state.filteredData.length ?
                        <AutocompleteItems items={this.state.filteredData} searchStr={this.state.searchStr} />
                        : null
                }
            </div>
        );
    }

}

Autocomplete.propTypes = {
    minCnt : PropTypes.number,
    displayCnt : PropTypes.number,
    data : PropTypes.arrayOf(PropTypes.string)
};

export default Autocomplete;