import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({type, id, placeholder, label, textAreaRows, value, onChange, invalidMsg}) => {
    const createInput = () => {
        switch (type) {
            case 'text':
                return <input type={type} id={id} placeholder={placeholder || ''}
                              className={`form-control ${invalidMsg && 'is-invalid'}`}
                              onChange={onChange} value={value} />
            case 'textArea':
                return <textarea id={id} placeholder={placeholder || ''}
                                 className={`form-control ${invalidMsg && 'is-invalid'}`}
                                 rows={textAreaRows} onChange={onChange} value={value} />
            default:
                return null;
        }
    };

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            {createInput()}
            {invalidMsg &&
                <div className="invalid-feedback">
                    {invalidMsg}
                </div>
            }
        </div>
    );
};

FormInput.propTypes = {
    type : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    label : PropTypes.string.isRequired,
    textAreaRows : PropTypes.number,
    value : PropTypes.string.isRequired,
    invalidMsg : PropTypes.string
};

export default FormInput;