import { useState } from 'react';
import './Projects.css';
import ProjectBox from './parts/ProjectBox';
import projectsData from '../../data/projectsData.json';

const Projects = () => {
    const [projectDetail, setProjectDetail] = useState(null);

    const handleClick = (obj) => {
        setProjectDetail(obj);
        const projDetailDiv = document.getElementById("project-detail");
        if (projDetailDiv) projDetailDiv.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id="projects" className="section">
            <h1>My Projects</h1>
            <div id="project-layout">
                <div id="project-list" className="project-column">
                    {["All", "IT", "3D", "Video production"].map(category => (
                        <button>
                            {category}
                        </button>
                    ))}

                    {projectsData.map((project, index) => (
                        <ProjectBox
                            key={index}
                            projectName={project.projectName}
                            shortDescription={project.shortDescription}
                            technologies={project.technologies}
                            repoLink={project.repoLink}
                            onClick={() => handleClick(project)}
                        />
                    ))}
                </div>

                <div id="project-detail" className="project-column">
                    {projectDetail ? (
                        <div>
                            <h2>{projectDetail.projectName} ({projectDetail.year})</h2>
                            <p>{projectDetail.shortDescription}</p>
                            <p>Used technologies: {projectDetail.technologies}</p>
                            <img src={`${process.env.PUBLIC_URL}/images/projects/${projectDetail.imageFileName}`} alt={`${projectDetail.projectName} overview`} />
                            <p className="long-description-text">{projectDetail.longDescription}</p>
                        </div>
                    ) : "Choose a project to see details"}
                </div>
            </div>
        </div>
    );
};

export default Projects;