import React from 'react';
import {Link} from 'react-router-dom';

const TeamMenu = ({team}) => 
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            {team ?
                <ul className="nav navbar-nav">
                    <li><Link to={`/team/${team.id}/info`}>Info</Link></li>
                    <li><Link to={`/team/${team.id}/roster`}>Roster</Link></li>
                </ul>
                : ''
            }
        </div>
    </nav>
;

export default TeamMenu;