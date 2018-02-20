import React from 'react';

const Button = ({ type, btnClass, onClick, children }) =>
    <button type={type} 
            className={"btn " + btnClass} 
            onClick={onClick}>{children}</button>;

export default Button;