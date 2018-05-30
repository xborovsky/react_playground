import React from 'react';
import PlayerStatsByLeague from './PlayerStatsByLeague';
import Auxiliary from './../common/Auxiliary';
import {getPlayerName} from './player.util';

const PlayerStats = ({player, stats}) =>
    stats ?
        <Auxiliary>
            <table className="table table-striped">
                <caption>Player statistics ({getPlayerName(player)})</caption>
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>Team</th>
                        <th>League</th>
                        <th>Team class</th>
                        <th>Level</th>
                        <th>GP</th>
                        <th>G</th>
                        <th>A</th>
                        <th>TP</th>
                        <th>PIM</th>
                        <th>+/-</th>
                    </tr>
                </thead>
                <tbody>
                {stats.map((stat, cnt) => {
                    return (
                        <tr key={cnt}>
                            <td>{stat.season.name}</td>
                            <td>
                                {(stat.team.fullName.length ? stat.team.fullName : stat.team.name)}
                                &nbsp;
                                {(stat.league.country !== undefined ? (' (' + stat.league.country.abbreviation + ')') : '')}
                            </td>
                            <td>{stat.league.fullName}</td>
                            <td>{stat.team.teamClass}</td>
                            <td>{stat.league.playerLevel}</td>
                            <td>{stat.GP}</td>
                            <td>{stat.G}</td>
                            <td>{stat.A}</td>
                            <td>{stat.TP}</td>
                            <td>{stat.PIM}</td>
                            <td>{stat.PM || 0}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <PlayerStatsByLeague stats={stats} />
        </Auxiliary>
        : <div>Loading...</div>
;

export default PlayerStats;