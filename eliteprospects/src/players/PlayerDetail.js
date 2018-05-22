import React from 'react';
import PlayerPhoto from './PlayerPhoto';

const PlayerDetail = ({player, profile}) =>
    player ?
        <table className="table">
            <tbody>
                <tr>
                    <th>Photo</th>
                    <td><PlayerPhoto photoUrl={player.imageUrl} playerName={player.firstName + ' ' + player.lastName} /></td>
                </tr>
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
                {profile ?
                    <tr>
                        <th>Profile</th>
                        <td>{profile.info}</td>
                    </tr>
                : null}
            </tbody>
        </table>
        : <div>Loading...</div>
;

export default PlayerDetail;