import './ProjectBox.scss';

interface ProjectBoxProps {
    projectName: string;
    shortDescription: string;
    technologies: string;
    repoLink?: string;
    source?: string;
    onClick?: () => void;
}

const ProjectBox = ({ projectName, shortDescription, technologies, repoLink, source, onClick }: ProjectBoxProps) => {
    return (
        <button className="project-box" onClick={onClick}>
            <div>
                <h3>{projectName}</h3>
                <p>{shortDescription}</p>
                <span className="technologies">{technologies}</span>
            </div>
            {repoLink && (
            <a href={repoLink} target="_blank" rel="noreferrer">
                <img src={`/images/${source}.png`} alt="Link Icon" />
            </a>
            )}
        </button>
    );
};

export default ProjectBox;