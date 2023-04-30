import React from 'react'
import ProjectCard from '../components/Project';
import Projects from '../utils';

const Portfolio = ({ projects }) => {

    const renderedList = projects.map((project) => {
        return (
            <ProjectCard project={project} />
        )
    });

    // return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default Portfolio