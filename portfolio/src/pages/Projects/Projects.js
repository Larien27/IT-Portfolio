import { useState } from 'react';
import './Projects.scss';
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
                    <div id="projects-category-filter">
                        {["All", "IT", "3D", "Video production"].map(category => (
                            <button>
                                {category}
                            </button>
                        ))}
                    </div>

                    {projectsData.map((project, index) => (
                        <ProjectBox
                            key={index}
                            projectName={project.projectName}
                            shortDescription={project.shortDescription}
                            technologies={project.technologies}
                            repoLink={project.repoLink}
                            source={project.source}
                            onClick={() => handleClick(project)}
                        />
                    ))}
                </div>

                <div id="project-detail" className="project-column">
                    {projectDetail ? (
                        <div>
                            <div className="title-repo-header">
                                <h2>{projectDetail.projectName} ({projectDetail.year})</h2>
                                {projectDetail.repoLink && (
                                <a href={projectDetail.repoLink} target="_blank" rel="noreferrer">
                                    <img src={`${process.env.PUBLIC_URL}/images/${projectDetail.source}.png`} alt="Link Icon" />
                                </a>
                                )}
                            </div>
                            <p>{projectDetail.shortDescription}</p>
                            <p className="technologies-desc">Used technologies: {projectDetail.technologies}</p>
                            {projectDetail.imageFileName && (
                                <img src={`${process.env.PUBLIC_URL}/images/projects/${projectDetail.imageFileName}`} alt={`${projectDetail.projectName} overview`} />
                            )}
                            <p className="long-description-text">{projectDetail.longDescription}</p>
                        </div>
                    ) : "Choose a project to see details"}
                </div>
            </div>
        </div>
    );
};

export default Projects;