import React from 'react';

const Persons = ({persons}) => {
    return (
        <ul>
            {persons.map((name, index) => {
                return <li key={ index }>{name}</li>
            })}
        </ul>
    );
};

export default Persons;