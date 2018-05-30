import React, {Component} from 'react';
import {getPlayerDetail, getPlayerStats, getPlayerProfile} from './../utils/players-api-util';
import PlayerDetail from './PlayerDetail';
import PlayerStats from './PlayerStats';
import PlayerAwards from './PlayerAwards';
import Auxiliary from './../common/Auxiliary';
import PlayerMenu from './PlayerMenu';
import { Route } from 'react-router-dom';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player : null,
            stats : null,
            profile : null
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
        getPlayerProfile(id).then((profile) => {
            this.setState({profile});
        });
    }

    render() {
        const {player, stats, profile} = this.state;
        return (
            <Auxiliary>
                <PlayerMenu player={player} />

                <Route path={`/player/:id/info`} render={() => <PlayerDetail player={player} profile={profile} />} />
                <Route path={`/player/:id/stats`} render={() => <PlayerStats player={player} stats={stats} />} />
                <Route path={`/player/:id/awards`} render={() => <PlayerAwards player={player} />} />
            </Auxiliary>
        );
    }
};

export default Player;