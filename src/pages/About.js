import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../css/about.css';

const About = () => {
    return (
        <div className="about">
            <Header />
            <div className="about-container">
                <h1>About Me</h1>
                <div className="about-seperator"></div>
                <div className="about-content">
                    <div className="about-image">
                        <div>IMAGE HERE</div>
                        <div className="about-image-subtext">Picture of the one and only Titus M.H</div>
                    </div>

                    <div className="about-assortment">
                    <div className="about-section">
                        <div className="about-title">
                            <h4>Hobbies</h4>
                        </div>
                        <div className="about-section-content">
                            <p>- Tries making programming a full-time job</p>
                            <p>- Likes Gaming on a regular</p>
                            <p>- Enjoys looking at rocks :D</p>
                            <p>- Enjoys being out in nature</p>
                        </div>
                    </div>
                    <div className="about-section">
                        <div className="about-title">
                            <h4>Passions</h4>
                        </div>
                        <div className="about-section-content">
                            <p>- Making people as happy as I can make them</p>
                            <p>- Working efficiently and as hard as possible</p>
                            <p>- Learning languages at least a little</p>
                        </div>
                    </div>
                    <div className="about-section">
                        <div className="about-title">
                            <h4>Work-Style</h4>
                        </div>
                        <div className="about-section-content">
                            <p>- Organized, efficient and multi-tasker</p>
                            <p>- Prefers customer statisfaction over anything</p>
                        </div>
                    </div>
                    <div className="about-section socials">
                        <div className="about-title">
                            <h4>Socials</h4>
                        </div>
                        <div className="about-section-content">
                            <p>Twitch: <a href="https://www.twitch.tv/xxthedweebxx">xXTheDweebXx</a></p>
                            <p>Youtube: <a href="https://www.youtube.com/channel/UCmjCFhiJyBOSgZ70bvwMovA">xXTheDweebXx</a></p>
                            <p>Twitter: <a href="https://x.com/xXTheDweebXx">xxthedweebxx</a></p>
                            <p>Instagram: <a href="https://www.instagram.com/_xxthedweebxx_">xxthedweebxx</a></p>
                        </div>
                    </div>
                    <div className="about-section socials">
                        <div className="about-section-content">
                            <p className="about-desc">I'm a passionate developer looking to expand my professional knowledge in the field and gain the skills necessary to go into a full time job and then into freelancing. I maintain a organized workplace attitude and make sure that customers always come first. Teamwork has always been the best if done well alongside me, it is the upmost important thing for me to have in a busy/complex environment.</p>
                        </div>
                    </div>
                </div> 
                </div>
            </div>
            <Footer />  
        </div>
    );
}

export default About;