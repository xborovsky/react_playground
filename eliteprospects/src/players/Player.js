import React, {Component} from 'react';
import {getPlayerDetail} from './../utils/api-util';
import PlayerDetail from './PlayerDetail';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player : null
        };
    }

    componentDidMount() {
        getPlayerDetail(this.props.match.params.id).then((player) => {
            console.log(player);
            this.setState({player});
        });
    }

    render() {
        const {player} = this.state;
        return (
            player ?
                <PlayerDetail player={this.state.player} /> :
                <div>Loading...</div>
        );
    }
};

export default Player;