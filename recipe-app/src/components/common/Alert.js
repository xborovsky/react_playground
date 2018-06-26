import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({type, children}) =>
    <div className={`alert alert-${type}`} role="alert">
        {children}
    </div>
;

Alert.propTypes = {
    type : PropTypes.oneOf(['danger', 'success'])
};

export default Alert;