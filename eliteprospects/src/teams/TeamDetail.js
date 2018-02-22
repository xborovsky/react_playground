import React from 'react';

const TeamDetail = ({team}) =>
    team ?
        <table className="table">
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{team.fullName || team.name}</td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td>{team.locality.name} - {team.country.name}</td>
                </tr>
                <tr>
                    <th>Founded</th>
                    <td>{team.foundedYear}</td>
                </tr>
                <tr>
                    <th>Colors</th>
                    <td>{team.colors}</td>
                </tr>
            </tbody>
        </table>
        : <div>Loading...</div>
;

export default TeamDetail;