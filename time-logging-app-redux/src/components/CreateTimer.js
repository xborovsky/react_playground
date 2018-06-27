import React from 'react';

const CreateTimer = ({onClicked}) =>
    <button className="btn btn-light btn-block btn-create-timer" title="Create new timer" onClick={onClicked}><i className="far fa-plus-square"></i></button>
;

export default CreateTimer;