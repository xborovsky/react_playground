import React from 'react';

const Search = ({ onChange }) => {
    return (
        <input type="text" onChange={(e) => onChange(e)} className="form-control" placeholder="type to search..." />
    );
};

export default Search;