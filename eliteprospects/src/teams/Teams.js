import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auxiliary from './../common/Auxiliary';

class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results : props.location.state.results,
            selectedTeam : null
        };
    }

    goToDetail(id) {
        this.setState({selectedTeam : id});
    }

    render() {
        return (
            <Auxiliary>
                <table className="table">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map((team, cnt) => {
                            return (
                                <tr key={cnt} className="link" onClick={() => this.goToDetail(team.id)}>
                                    <td>{cnt+1}</td>
                                    <td>{team.fullName || team.name}</td>
                                    <td>{team.teamClass}</td>
                                    <td>{team.country.name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {this.state.selectedTeam && <Redirect to={`/team/${this.state.selectedTeam}`} />}
            </Auxiliary>
        );
    }
}

export default Teams;