import React from 'react'
import projectArray from '../utils/projectArray.js'

// ProjectCard accepts a single project as a prop
// This component is solely responsible for displaying the specific information for a given project
const ProjectCard = projectArray.map((project) => {
    return (
        <div className="card-deck">
            <div className="card">
                <img className="card-img" src={project.image} alt="{project.name}" />
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}<a href={project.app}>Link to App</a>/<a href={project.github}>Github</a></p>
                </div>
                <div className="card-footer">
                </div>
            </div>
        </div>
    )
});

export default ProjectCard