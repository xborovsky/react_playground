import React from 'react';

const Search = ({onCountryChange, onCapitalChange, onRegionChange}) => {
    return (
        <tr>
            <td><input type="text" placeholder="Filter by country" onChange={(e) => onCountryChange(e, 'country')} /></td>
            <td><input type="text" placeholder="Filter by capital" onChange={(e) => onCapitalChange(e, 'capital')} /></td>
            <td><input type="text" placeholder="Filter by region"  onChange={(e) => onRegionChange(e, 'region')} /></td>
        </tr>
    );
};

export default Search;