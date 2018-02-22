import React from 'react';

const PlayerStatsByLeague = ({stats}) => {

    const preprocessStats = (stats) => {
        var result = [];
        stats.forEach(element => {
            var exists = false;
            result.forEach(resultItem => {
                if (resultItem.leagueName === element.league.fullName) {
                    resultItem.GP += element.GP;
                    resultItem.G += element.G;
                    resultItem.A += element.A;
                    resultItem.TP += element.TP;
                    resultItem.PIM += element.PIM;
                    resultItem.PM += element.PM;
                    exists = true;
                    return;
                }
            });
            if (!exists) {
                result.push({
                    leagueName : element.league.fullName,
                    GP : element.GP,
                    G : element.G,
                    A : element.A,
                    TP : element.TP,
                    PIM : element.PIM,
                    PM : element.PM
                });
            }
        });
        return result;
    };

    if (stats) { // preprocess data
        stats = preprocessStats(stats);
    }

    return (
        stats ?
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>League</th>
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
                        <td>{stat.leagueName}</td>
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
        : <div>Loading...</div>
    );
};

export default PlayerStatsByLeague;