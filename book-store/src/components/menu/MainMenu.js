import React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = () =>
    <ul className="nav nav-pills">
        <li className="nav-item">
            <NavLink to={'/'} exact={true} className="nav-link">Book list</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to={'/create'} className="nav-link" activeClassName="active">Create book</NavLink>
        </li>
    </ul>
;

export default MainMenu;