import React, { Component } from 'react';
import TeamDetail from './TeamDetail';
import {getTeamDetail} from './../utils/teams-api-util';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team : null
        };
    }

    componentDidMount() {
        getTeamDetail(this.props.match.params.id)
            .then(
                (team) => this.setState({team}),
                (error) => console.error(error) // TODO error interceptor??
            );
    }

    render() {
        const {team} = this.state;
        return (
            <TeamDetail team={team} />
        );
    };
}

export default Team;