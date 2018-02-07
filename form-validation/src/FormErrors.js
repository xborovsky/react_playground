import React from 'react';

const FormErrors = ({ errors }) => {
    return (
        <div className="formErrors">
            {Object.keys(errors).map((field, index) => {
                if (errors[field].length > 0) {
                    return <p key={index}>{field} {errors[field]}</p>
                }
            })}
        </div>
    );
};

export default FormErrors;