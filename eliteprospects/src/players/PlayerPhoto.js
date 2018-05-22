import React from 'react';

const PlayerPhoto = ({photoUrl, playerName}) =>
    <img src={photoUrl ? `http://files.eliteprospects.com/layout/players/${photoUrl}` : `/img/unknown_person.png`}
         alt="player photo"
         title={photoUrl ? playerName : 'Unknown'}
         className="img-thumbnail" />
 ;

export default PlayerPhoto;