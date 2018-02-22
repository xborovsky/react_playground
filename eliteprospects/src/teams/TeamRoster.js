import React from 'react';

const TeamRoster = ({roster}) =>
    roster ? 
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Born</th>
                    <th>Nationality</th>
                    <th>Club of origin</th>
                    <th>HT</th>
                    <th>WT</th>
                    <th>S</th>
                </tr>
            </thead>
            <tbody>
                {roster.sort((entry1, entry2) => {
                    return entry1.jerseyNumber < entry2.jerseyNumber
                }).map((entry, cnt) => {
                    return (
                        <tr key={entry.id}>
                            <td>{entry.jerseyNumber}</td>
                            <td>{entry.player.firstName} {entry.player.lastName}</td>
                            <td>{entry.player.dateOfBirth}</td>
                            <td>{entry.player.country.name}</td>
                            <td>{entry.player.clubOfOrigin ? entry.player.clubOfOrigin.name : ''}</td>
                            <td>{entry.player.height}</td>
                            <td>{entry.player.weight}</td>
                            <td>{entry.player.shoots ? entry.player.shoots.substring(0, 1) : ''}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        : <div>Loading...</div>
;

export default TeamRoster;