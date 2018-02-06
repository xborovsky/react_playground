import React from 'react';

const DataList = ({data}) => {
    return (
        <tbody>
            {data.map((entry, index) => {
                return (
                    <tr key={index}>
                        <td>{entry.country}</td>
                        <td>{entry.capital}</td>
                        <td>{entry.region}</td>
                    </tr>
                );
            })}
        </tbody>
    );
};

export default DataList;