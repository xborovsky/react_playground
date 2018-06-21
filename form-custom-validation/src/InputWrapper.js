import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const InputWrapper = ({inputProps, labelAfterInput}) => (
    <div className={inputProps.type === 'checkbox' ? 'form-check' : 'form-group'}>
        {labelAfterInput ? null : <label htmlFor={inputProps.id}>{inputProps.label}</label>}
        <Input type={inputProps.type}
               name={inputProps.name}
               id={inputProps.id}
               placeholder={inputProps.placeholder}
               checked={inputProps.checked}
               className={inputProps.className}
               value={inputProps.value}
               onChange={inputProps.onChange} />
        {labelAfterInput ? <label htmlFor={inputProps.id}>{inputProps.label}</label> : null}
    </div>
);

export default InputWrapper;

InputWrapper.propTypes = {
    inputProps : PropTypes.shape({
        id : PropTypes.string.isRequired,
        label : PropTypes.string.isRequired,
        type : PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
        placeholder : PropTypes.string,
        checked : PropTypes.bool,
        className : PropTypes.string,
        value : PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]),
        onChange : PropTypes.func
    }),
    labelAfterInput : PropTypes.bool
};