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
                        <h2 className="contact-type">Phone Number</h2>
                        <h3 className="contact-info" id="info-1" onClick={() => {
                            document.getElementById("info-1").style.backgroundColor = "transparent";
                            document.getElementById("info-1").textContent = "438-501-3972";
                        }}>*************</h3>
                        <p className="contact-inspect" onClick={() => {
                            document.getElementById("info-1").style.backgroundColor = "transparent";
                            document.getElementById("info-1").textContent = "438-501-3972";
                        }}>Click to view phone number</p>
                    </div>
                    <div className="contact-item border-bottom">
                        <h2 className="contact-type">Hotmail (Professional)</h2>
                        <h3 className="contact-info" id="info-2" onClick={() => {
                            document.getElementById("info-2").style.backgroundColor = "transparent";
                            document.getElementById("info-2").textContent = "mercier200012@hotmail.com";
                        }}>*************</h3>
                        <p className="contact-inspect" onClick={() => {
                            document.getElementById("info-2").style.backgroundColor = "transparent";
                            document.getElementById("info-2").textContent = "mercier200012@hotmail.com";
                        }}>Click to view Hotmail</p>
                    </div>
                    <div className="contact-item border-right">
                        <h2 className="contact-type">Gmail (Non-professional)</h2>
                        <h3 className="contact-info" id="info-3" onClick={() => {
                            document.getElementById("info-3").style.backgroundColor = "transparent";
                            document.getElementById("info-3").textContent = "mercier200012@gmail.com";
                        }}>*************</h3>
                        <p className="contact-inspect" onClick={() => {
                            document.getElementById("info-3").style.backgroundColor = "transparent";
                            document.getElementById("info-3").textContent = "mercier200012@gmail.com";
                        }}>Click to view Gmail</p>
                    </div>
                    <div className="contact-item">
                        <h2 className="contact-type">LinkedIn</h2>
                        <h3 className="contact-info" id="info-4" onClick={() => {
                            document.getElementById("info-4").style.backgroundColor = "transparent";
                            document.getElementById("info-4").textContent = "titus-mercier-hachey";
                        }}>*************</h3>
                        <p className="contact-inspect" onClick={() => {
                            document.getElementById("info-4").style.backgroundColor = "transparent";
                            document.getElementById("info-4").textContent = "titus-mercier-hachey";
                        }}>Click to view LinkedIn</p>
                    </div>
                </div>
            <Footer />  
        </div>
    );
}

export default Contact;