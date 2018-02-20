import React from 'react';

const PlayerDetail = ({player}) =>
    <table className="table">
        <tbody>
            <tr>
                <th>Name:</th>
                <td>{player.firstName + ' ' + player.lastName}</td>
            </tr>
            <tr>
                <td>Height</td>
                <td>{player.height} cm</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>{player.weight} kg</td>
            </tr>
            <tr>
                <td>Shoots</td>
                <td>{player.shoots}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{player.country.name + ' (' + player.country.continent + ')'}</td>
            </tr>
            <tr>
                <td>Status</td>
                <td>{player.playerStatus}</td>
            </tr>
        </tbody>
    </table>
;

export default PlayerDetail;