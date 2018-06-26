import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = ({items}) =>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {items.map((item, cnt) => <BreadcrumbItem key={cnt} label={item.label} link={item.link} active={item.active} />)}
        </ol>
    </nav>
;

Breadcrumb.propTypes = {
    items : PropTypes.arrayOf(
        PropTypes.shape({
            label : PropTypes.string.isRequired,
            link : PropTypes.string,
            active : PropTypes.bool
        })
    ).isRequired
};

export default Breadcrumb;