import React, {Component} from 'react';
import SearchForm from './SearchForm';
import Auxiliary from './../common/Auxiliary';
import {findPlayers, findTeams} from './../utils/api-util';
import { Redirect } from 'react-router-dom';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: '',
            team : '',
            foundPlayers : [],
            foundTeams : []
        };
    }

    onPlayerNameTyped(evt) {
        this.setState({player : evt.target.value});
    }

    onTeamNameTyped(evt) {
        this.setState({team : evt.target.value});
    }

    onSearchPlayer(evt) {
        evt.preventDefault();
        findPlayers(this.state.player).then((players) => {
            this.setState({ foundPlayers : players });
        });
    }

    onSearchTeam(evt) {
        evt.preventDefault();
        findTeams(this.state.team).then((teams) => {
            console.log(teams);
        });
    }

    render () {
        return (
            <Auxiliary>
                <SearchForm label="Player"
                            placeholder="Type players name..."
                            onChange={(e) => this.onPlayerNameTyped(e)}
                            onSubmit={(e) => this.onSearchPlayer(e)} />
                <SearchForm label="Team"
                            placeholder="Type teams name..."
                            onChange={(e) => this.onTeamNameTyped(e)}
                            onSubmit={(e) => this.onSearchTeam(e)} />
                {this.state.foundPlayers.length && 
                    <Redirect to={{
                        pathname : '/players',
                        state : { results : this.state.foundPlayers }
                    }} />
                }
                {this.state.foundTeams.length && 
                    <Redirect to={{
                        pathname : '/teams',
                        state : { results : this.state.foundTeams }
                    }} />
                }
            </Auxiliary>
        );
    }
};

export default Search;