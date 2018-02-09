import React from 'react';
import { getContactById } from './ContactService';

const ContactDetail = ({match}) => {
    let contact = getContactById(match.params.id);

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="business-card">
                        <div className="media">
                            <div className="media-body">
                                <h2 className="media-heading">{contact.name}</h2>
                                <div className="job">{contact.position}</div>
                                <div>Phone: {contact.phone}</div>
                                <div>Mobile: {contact.mobile}</div>
                                <div className="mail"><a href={'mailto:' + contact.email}>{contact.email}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;