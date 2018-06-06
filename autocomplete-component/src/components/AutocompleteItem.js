import React from 'react';

const AutocompleteItem = ({data, searchStr}) =>
    <div>
        <strong>{searchStr}</strong>{data.substring(searchStr.length)}
    </div>
;

export default AutocompleteItem;