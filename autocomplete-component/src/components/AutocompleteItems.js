import React from 'react';
import AutocompleteItem from './AutocompleteItem';

const AutocompleteItems = ({items, searchStr}) =>
    <div className="autocomplete-items">
        {items.map((item, idx) =>
            <AutocompleteItem key={idx} data={item} searchStr={searchStr} />
        )}
    </div>
;

export default AutocompleteItems;