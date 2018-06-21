import React from 'react';

const Input = ({type, value, name, id, placeholder, checked, className, onChange}) => {

    const createInput = () => {
        switch(type) {
            case 'text':
            case 'password':
            case 'email':
                return <input type={type} name={name} placeholder={placeholder}
                              id={id} className={className} value={value}
                              onChange={onChange} />
            case 'textarea':
                return <textarea rows="5" cols="20" name={name} placeholder={placeholder}
                                 id={id} className={className} value={value} onChange={onChange} />
            case 'checkbox':
                return <input type={type} name={name} checked={checked} id={id} className={className} onClick={onChange} />
            default: return null;
        }
    }

    return(
        createInput()
    );
};

export default Input;