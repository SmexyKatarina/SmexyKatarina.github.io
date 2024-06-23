import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import projects from '../data/projects.js';
import ProjectTile from '../components/ProjectTile.js';

import '../css/projects.css';

const Projects = () => {


    return (
        <div className="projects">
            <Header />
            <div className="projects-container">
                {projects.map(x => {
                    return <ProjectTile project={x}/>
                })}
            </div>
            <Footer />  
        </div>
    );
}

export default Projects;