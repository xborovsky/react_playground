import React from 'react';
import { connect } from 'react-redux';
import { searchStarted } from '../redux/action-creators';

const Search = ({onSearchChange, doStartSearch}) => {

    let timer = null;

    const handleChange = (e) => {
        clearTimeout(timer);
        const val = e.target.value;
        doStartSearch(val);
        timer = setTimeout(() => onSearchChange(val), 400);
    };

    return (
        <div className="container">
            <input type="text" autoFocus className="form-control" placeholder="type to search..." onChange={handleChange} />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    doStartSearch: text => dispatch(searchStarted(text))
});

const ConnectedSearch = connect(null, mapDispatchToProps)(Search);

export default ConnectedSearch;