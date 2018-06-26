import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
            <div className="navbar-nav">
                <NavLink to={'/'} className="nav-item nav-link" exact={true} activeClassName="active">Recipes</NavLink>
                <NavLink to={'/new'} className="nav-item nav-link"  activeClassName="active">Add new recipe</NavLink>
            </div>
        </div>
    </nav>
;

export default Menu;