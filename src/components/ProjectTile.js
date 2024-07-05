import React from 'react';

/* Template Project
    {project_request: "https://api.github.com/repos/smexykatarina/REPO-NAME", project_name: "PROJECTNAME", creation_date: "CREATIONDATE", languages: ["HTML", "CSS", "JAVA"], frameworks_packages: ["react.js"], repo_link: "https://www.github.com/smexykatarina/REPO-NAME" }
*/

import '../css/projects.css';

const ProjectTile = (props) => {

    const { project_name, category, description, creation_date, languages, frameworks_packages, repo_link } = props.project;

    return (
        <div className="project-tile" onClick={() => window.open(repo_link, '_blank').focus()}>
            <div className="project-tile-hover"></div>
            <h3 className="name"><a href={repo_link}>{project_name} ({category})</a></h3>
            <div className="project-info">
                <h4 className="creation-date">Created on (from GH): {creation_date}</h4>
                <div className="languages">
                    <h5 className="l-header">Languages</h5>
                    <p className="l-content">{languages.join(", ")}</p>
                </div>
                <div className="frameworks-packages">
                    <h5 className="fp-header">Frameworks/Packages/Softwares</h5>
                    <p className="fp-content">{frameworks_packages.join(", ")}</p>
                </div>
            </div>
            <div className="project-desc">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectTile;