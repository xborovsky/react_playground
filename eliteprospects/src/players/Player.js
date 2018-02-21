import React, {Component} from 'react';
import {getPlayerDetail, getPlayerStats} from './../utils/api-util';
import PlayerDetail from './PlayerDetail';
import PlayerStats from './PlayerStats';
import Auxiliary from './../common/Auxiliary';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player : null,
            stats : null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getPlayerDetail(id).then((player) => {
            console.log(player);
            this.setState({player});
        });
        getPlayerStats(id).then((stats) => {
            console.log(stats);
            this.setState({stats});
        });
    }

    render() {
        const {player, stats} = this.state;
        return (
            <Auxiliary>
                <PlayerDetail player={player} />
                <PlayerStats stats={stats} />
            </Auxiliary>
        );
    }
};

export default Player;