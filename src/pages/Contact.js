import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../css/contact.css';

const Contact = () => {

    return (
        <div className="contact">
            <Header />
                <div className="contacts">
                    <div className="contact-item border-right border-bottom">
                        <h1 className="contact-type">Phone Number</h1>
                        <h3 className="contact-info" id="info-1" onClick={() => {
                            document.getElementById("info-1").style.backgroundColor = "transparent";
                        }}>{process.env.REACT_APP_PHONE_NUMBER}</h3>
                        <p className="contact-inspect" onClick={() => {
                            document.getElementById("info-1").style.backgroundColor = "transparent";
                        }}>Click to view phone number</p>
                    </div>
                    <div className="contact-item border-bottom">
                        <h1 className="contact-type">Hotmail (Professional)</h1>
                        <h3 className="contact-info" id="info-2" onClick={() => {
                            document.getElementById("info-2").style.backgroundColor = "transparent";
                        }}>{process.env.REACT_APP_HOTMAIL}</h3>
                        <p className="contact-inspect" onClick={() => {
                            document.getElementById("info-2").style.backgroundColor = "transparent";
                        }}>Click to view Hotmail</p>
                    </div>
                    <div className="contact-item border-right">
                        <h1 className="contact-type">Gmail (Non-professional)</h1>
                        <h3 className="contact-info" id="info-3" onClick={() => {
                            document.getElementById("info-3").style.backgroundColor = "transparent";
                        }}>{process.env.REACT_APP_GMAIL}</h3>
                        <p className="contact-inspect" onClick={() => {
                            document.getElementById("info-3").style.backgroundColor = "transparent";
                        }}>Click to view Gmail</p>
                    </div>
                    <div className="contact-item">
                        <h1 className="contact-type">LinkedIn</h1>
                        <h3 className="contact-info" id="info-4" onClick={() => {
                            document.getElementById("info-4").style.backgroundColor = "transparent";
                        }}>{process.env.REACT_APP_LINKEDIN}</h3>
                        <p className="contact-inspect" onClick={() => {
                            document.getElementById("info-4").style.backgroundColor = "transparent";
                        }}>Click to view LinkedIn</p>
                    </div>
                    <h6 className="contact-cipher">Everything is ciphered for spam reasons. <span className="reveal">CLICK ON BOX TO REVEAL</span></h6>
                    <h6 className="contact-cipher-2">Alphabet: abcdefghijklmnopqrstuvwxyz0123456789</h6>
                </div>
            <Footer />  
        </div>
    );
}

export default Contact;