import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({id, name, position}) => {
    return (
        <li className="list-group-item">
            <h3>{name}</h3>
            <span>{position}</span>
            <Link to={"/contact-detail/" + id}>Detail</Link>
        </li>
    );
};

export default Contact;