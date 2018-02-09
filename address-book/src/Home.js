import React, { Component } from 'react';
import Search from './Search';
import ContactList from './ContactList';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search : ''
        };
    }

    handleSearch(evt) {
        let val = evt.target.value;
        this.setState({ search : val });
    }

    render() {
        return(
            <div>
                <div className="container">
                    <Search onChange={(e) => this.handleSearch(e)} />
                </div>
                <br />
                <div className="container">
                    <ContactList filter={this.state.search} />
                </div>
            </div>
        );
    }
};

export default Home;