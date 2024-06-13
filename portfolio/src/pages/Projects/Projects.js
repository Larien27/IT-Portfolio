import { useState } from 'react';
import './Projects.css';
import ProjectBox from './parts/ProjectBox';
import projectsData from '../../data/projectsData.json';

const Projects = () => {
    const [projectDetail, setProjectDetail] = useState(null);

    const handleClick = (obj) => {
        setProjectDetail(obj);
    }

    return (
        <div id="projects" className="section">
            <h1>My Projects</h1>
            <div id="project-layout">
                <div id="project-list" className="project-column">
                {projectsData.map((project) => (
                    <ProjectBox
                        projectName={project.projectName}
                        shortDescription={project.shortDescription}
                        technologies={project.technologies}
                        repoLink={project.repoLink}
                        onClick={() => handleClick(project)}
                    />
                ))}
                </div>
                <div id="project-detail" className="project-column">
                    <p>{projectDetail ? projectDetail.projectName : ""}</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;