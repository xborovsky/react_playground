import React, { Component } from 'react';
import Contact from './Contact';
import { getAllContacts } from './ContactService';

class ContactList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contacts : getAllContacts(),
            filteredContacts : []
        };
    }

    componentWillReceiveProps(newProps) {
        let filteredContacts = this.state.contacts.slice();
        if (newProps.filter && newProps.filter.length) {
            filteredContacts = filteredContacts.filter(function(contact) {
                return contact.name.toLowerCase().indexOf(newProps.filter.toLowerCase()) > -1;
            });
        }
        this.setState({
            filteredContacts : filteredContacts
        });
    }

    componentDidMount() {
        this.setState({
            filteredContacts : this.state.contacts
        });
    }

    render() {
        return(
            <ul className="list-group">
                {this.state.filteredContacts.map((contact, idx) => {
                    return (
                        <Contact
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            position={contact.position} />
                    );
                })}
            </ul>
        );
    }
}

export default ContactList;