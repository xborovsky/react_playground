import React, { Component } from 'react';
import TeamDetail from './TeamDetail';
import TeamRoster from './TeamRoster';
import {getTeamDetail, getTeamRoster} from './../utils/teams-api-util';
import {getCurrentSeason} from './../utils/season-api-util';
import Auxiliary from '../common/Auxiliary';
import {Route} from 'react-router-dom';
import TeamMenu from './TeamMenu';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team : null,
            roster : null
        };
    }

    componentDidMount() {
        getTeamDetail(this.props.match.params.id)
            .then(
                (team) => {
                    this.setState({team});
                    getCurrentSeason()
                        .then((season) => 
                            getTeamRoster(this.state.team.id, season.name)
                                .then((roster) => {
                                    console.log(roster);
                                    this.setState({roster})}));
                },
                (error) => console.error(error) // TODO error interceptor??
            );
    }

    render() {
        const {team, roster} = this.state;
        return (
            <Auxiliary>
                <TeamMenu team={team} />

                <Route path={`/team/:id/info`} render={() => <TeamDetail team={team} />} />
                <Route path={`/team/:id/roster`} render={() => <TeamRoster roster={roster} />} />
            </Auxiliary>
        );
    };
}

export default Team;