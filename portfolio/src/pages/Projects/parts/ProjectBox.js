import './ProjectBox.css';

const ProjectBox = ({ projectName, shortDescription, technologies, repoLink, onClick }) => {
    return (
        <button className="project-box" onClick={onClick}>
            <div>
                <h3>{projectName}</h3>
                <p>{shortDescription}</p>
                <span>{technologies}</span>
            </div>
            <a href={repoLink} target="_blank" rel="noreferrer">
                <img src="/images/github.png" alt="GitHub icon" />
            </a>
        </button>
    );
};

export default ProjectBox;