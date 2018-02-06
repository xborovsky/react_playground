import React from 'react';

const Search = ({onChange}) => {
    return (
        <input type="text" onChange={(e) => onChange(e)} />
    );
};

export default Search;