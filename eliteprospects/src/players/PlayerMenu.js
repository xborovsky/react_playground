import React from 'react';
import { NavLink } from 'react-router-dom';

const PlayerMenu = ({player}) => 
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            {player ?
                <ul className="nav navbar-nav">
                    <li><NavLink to={`/player/${player.id}/info`}>Info</NavLink></li>
                    <li><NavLink to={`/player/${player.id}/stats`}>Stats</NavLink></li>
                </ul>
                : ''
            }
        </div>
    </nav>
;

export default PlayerMenu;