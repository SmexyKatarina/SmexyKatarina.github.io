import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../css/contact.css';

const Contact = () => {

    return (
        <div className="contact">
            <Header />
                <div className="contacts">
                    <div className="contact-item">
                        <h1 className="contact-type">Phone Number</h1>
                        <h3 className="contact-info">{process.env.REACT_APP_PHONE_NUMBER}</h3>
                    </div>
                </div>
            <Footer />  
        </div>
    );
}

export default Contact;