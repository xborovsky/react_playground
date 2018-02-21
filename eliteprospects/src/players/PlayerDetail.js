import React from 'react';

const PlayerDetail = ({player}) =>
    player ?
        <table className="table">
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{player.firstName + ' ' + player.lastName}</td>
                </tr>
                <tr>
                    <th>Height</th>
                    <td>{player.height} cm</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>{player.weight} kg</td>
                </tr>
                <tr>
                    <th>Shoots</th>
                    <td>{player.shoots}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{player.country.name + ' (' + player.country.continent + ')'}</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td>{player.playerStatus}</td>
                </tr>
            </tbody>
        </table>
        : <div>Loading...</div>
;

export default PlayerDetail;