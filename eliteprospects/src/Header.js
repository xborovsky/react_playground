import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
    <div className="container">
        <div className="jumbotron">
            <h1><Link to="/">Eliteprospects</Link></h1>
            <p>App using eliteprospets API.</p>
        </div>
    </div>
;

export default Header;