import React from 'react';
import PropTypes from 'prop-types';

const InfoMessage = ({type, children}) =>
    <div className={`alert alert-${type}`} role="alert">
        {children}
    </div>
;

InfoMessage.propTypes = {
    type : PropTypes.oneOf(['info', 'danger', 'success'])
};

export default InfoMessage;