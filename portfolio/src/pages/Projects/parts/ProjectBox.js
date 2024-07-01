import './ProjectBox.css';

const ProjectBox = ({ projectName, shortDescription, technologies, repoLink, source, onClick }) => {
    return (
        <button className="project-box" onClick={onClick}>
            <div>
                <h3>{projectName}</h3>
                <p>{shortDescription}</p>
                <span className="technologies">{technologies}</span>
            </div>
            {repoLink && (
            <a href={repoLink} target="_blank" rel="noreferrer">
                <img src={`${process.env.PUBLIC_URL}/images/${source}.png`} alt="GitHub icon" />
            </a>
            )}
        </button>
    );
};

export default ProjectBox;