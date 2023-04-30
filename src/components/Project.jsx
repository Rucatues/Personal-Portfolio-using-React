import React from 'react'
import Projects from '../utils';

// ProjectCard accepts a single project as a prop
// This component is solely responsible for displaying the specific information for a given project
const ProjectCard = ({ project }) => {

    return (
        <div>
            <div className="card-deck">
                <div className="card col-md-4">
                    <img className="card-img-top" src={project.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">'Last updated 3 mins ago'</small>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ProjectCard