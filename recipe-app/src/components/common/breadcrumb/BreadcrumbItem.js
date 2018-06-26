import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const BreadcrumbItem = ({label, link, active}) =>
    <li className={`breadcrumb-item ${active ? 'active' : ''}`}>
        {link ?
            <NavLink to={link}>
                {label}
            </NavLink> :
            label
        }
    </li>
;

BreadcrumbItem.propTypes = {
    label : PropTypes.string.isRequired,
    link : PropTypes.string,
    active : PropTypes.bool
};

export default BreadcrumbItem;