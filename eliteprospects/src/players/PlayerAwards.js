import React from 'react';
import {getPlayerName} from './player.util';

const PlayerAwards = ({player}) => {
    let awards = [];
    if (player && player.awards && player.awards.length) {
        awards = player.awards
            .filter(award => award.awardType !== undefined && award.awardType !== null)
    }

    return (
        player && player.awards ?
            <table className="table table-striped">
                <caption>Player awards ({getPlayerName(player)})</caption>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Award</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        awards.length ?
                            awards
                                .map(award => award.awardType.name)
                                .reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[])
                                .map((item, cnt) => {
                                    return item.el && item.el.length ?
                                        <tr key={cnt}>
                                            <td>{cnt+1}</td>
                                            <td>{`${item.count}x ${item.el}`}</td>
                                        </tr> : ''
                                }) :
                            <tr>
                                <td colSpan="2" className="center">no awards...</td>
                            </tr>
                    }
                </tbody>
            </table> : ''
    );
};

export default PlayerAwards;