import React from 'react';
import { Link } from 'react-router-dom';

const PlayerMenu = ({player}) => 
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            {player ?
                <ul className="nav navbar-nav">
                    <li><Link to={`/player/${player.id}/info`}>Info</Link></li>
                    <li><Link to={`/player/${player.id}/stats`}>Stats</Link></li>
                </ul>
                : ''
            }
        </div>
    </nav>
;

export default PlayerMenu;