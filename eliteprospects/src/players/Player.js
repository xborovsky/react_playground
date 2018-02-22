import React, {Component} from 'react';
import {getPlayerDetail, getPlayerStats} from './../utils/players-api-util';
import PlayerDetail from './PlayerDetail';
import PlayerStats from './PlayerStats';
import Auxiliary from './../common/Auxiliary';
import PlayerMenu from './PlayerMenu';
import { Route } from 'react-router-dom';

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
            this.setState({player});
        });
        getPlayerStats(id).then((stats) => {
            this.setState({stats});
        });
    }

    render() {
        const {player, stats, match} = this.state;
        return (
            <Auxiliary>
                <PlayerMenu player={player} />

                <Route path={`/player/:id/info`} render={() => <PlayerDetail player={player} />} />
                <Route path={`/player/:id/stats`} render={() => <PlayerStats stats={stats} />} />
            </Auxiliary>
        );
    }
};

export default Player;