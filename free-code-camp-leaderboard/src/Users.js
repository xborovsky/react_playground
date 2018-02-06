import React from 'react';

const Users = ({users}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Recent</th>
                    <th>All time</th>
                    <th>Activity</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.recent}</td>
                            <td>{user.alltime}</td>
                            <td>{user.lastUpdate}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Users;