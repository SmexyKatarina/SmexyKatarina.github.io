import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../css/home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home">
            <Header />
                <div className="blurb">
                    <h2 className="blurb-header">The all-in-one personal website</h2>
                    <p className="blurb-text">This is an all-in-one website to share all of the knowledge and information I've currently been able to learn and continue to learn. All languages learned and projects that are posted on my GitHub will be linked here as well.</p>
                </div>
                <div className="section">
                    <h3 className="section-title">Projects</h3>
                    <p className="section-subtitle">These are projects that I've made or collaborated on with other people.</p>
                    <div className="section-items">
                        <div className="item">
                            <div className="item-title"><a href="https://www.github.com/smexykatarina/smexykatarina.github.io">Personal Website</a></div>
                            <div className="item-content">
                                <p>This is this current project you're looking at, if you want to see the code or the process, click the link above!</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-title"><a href="https://www.github.com/smexykatarina/e-comm-rest-api">E-Commerce App (REST API)</a></div>
                            <div className="item-content">
                                An E-Commerce App example that handles data through a database and displays it. User authentication is implemented for adding items to a cart and permissions along side it.
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-title"><a href="https://www.github.com/smexykatarina/reddit-client">Reddit Client</a></div>
                            <div className="item-content">
                                A randomizer project designed to use the Reddit JSON API to randomize an api based on the information fetched and stored. 
                            </div>
                        </div>
                    </div>
                    <div className="redirect" onClick={() => navigate("/projects")}>
                        <p>See more of my <span className="redirect-page">Projects</span></p>
                    </div>
                </div>
                <div className="section">
                    <h3 className="section-title">About</h3>
                    <p className="section-subtitle">Here you can learn about my personality, hobbies and other assortment of things.</p>
                    <div className="section-items">
                        <div className="item">
                            <div className="item-title">Development Experience</div>
                            <div className="item-content">
                                The programming part of me started when I was super young.
                                I took interest in how websites were made and started doing this as a hobby to learn and experiment with different basic things.
                                After that, I created mods and add-ons for games, this is basically what projected me into doing a full course on Full-Stack.
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-title">Work Style</div>
                            <div className="item-content">
                                Very big on organization and workflow. I prefer to work alone in some cases due to all the tasks that are given out.<br/>
                                I enjoy working with a team that is determined to show their best work and provide their 100% effort and contribution.
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-title">Hobbies</div>
                            <div className="item-content">
                                Gaming has become a good take-away for me from work and life.<br/>Hanging out with friends at night having a good time.<br/>Making/Researching small projects to improve on programming.
                            </div>
                        </div>
                    </div>
                    <div className="redirect" onClick={() => navigate("/about")}>
                        <p>Learn more about me <span className="redirect-page">here</span></p>
                    </div>
                </div>
                <div className="section">
                    <h3 className="section-title">Contact</h3>
                    <p>Contact me with the information</p>
                    <div className="section-items">
                        <div className="item">
                            <div className="item-title">Direct Contact</div>
                            <div className="item-content">
                                I respond mostly by email and direct text. If you want to get a fast response, send me a text telling me about you and the reason for contact and I'll get back to you as soon as I have time.
                                <br/>
                                If you prefer other methods; on the contacts page, there are additional options of reaching out to me.
                            </div>
                        </div>
                    </div>
                    <div className="redirect">
                        <p>See more ways to <span className="redirect-page">contact</span> me</p>
                    </div>
                </div>
            <Footer />  
        </div>
    );
}

export default Home;