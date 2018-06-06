import React from 'react';
import PropTypes from 'prop-types';

const defaultClasses = 'page-item';

const PaginationItem = ({additionalClasses, label, onItemClick}) =>
    <li className={`${defaultClasses} ${additionalClasses}`}>
        <a className="page-link" href="#" onClick={() => onItemClick()}>{label}</a>
    </li>
;

PaginationItem.propTypes = {
    additionalClasses : PropTypes.string,
    label : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onItemClick : PropTypes.func
};

export default PaginationItem;