import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auxiliary from './../common/Auxiliary';

class Players extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results : props.location.state.results,
            selectedPlayer : null
        };
    }

    goToDetail(id) {
        this.setState({selectedPlayer : id});
    }

    render() {
        return (
            <Auxiliary>
                <table className="table">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Name</th>
                            <th>Date of birth</th>
                            <th>Country</th>
                            <th>Position</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map((player, cnt) => {
                            return (
                                <tr key={cnt} className="link" onClick={() => this.goToDetail(player.id)}>
                                    <td>{cnt+1}</td>
                                    <td>{player.firstName + ' ' + player.lastName}</td>
                                    <td>{player.dateOfBirth}</td>
                                    <td>{`${player.country.name} (${player.country.continent})`}</td>
                                    <td>{player.playerPosition}</td>
                                    <td>{player.playerStatus}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {this.state.selectedPlayer && <Redirect to={`/player/${this.state.selectedPlayer}`} />}
            </Auxiliary>
        );
    }
}

export default Players;