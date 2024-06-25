import './ProjectBox.css';

const ProjectBox = ({ projectName, shortDescription, technologies, repoLink, onClick }) => {
    return (
        <button className="project-box" onClick={onClick}>
            <div>
                <h3>{projectName}</h3>
                <p>{shortDescription}</p>
                <span className="technologies">{technologies}</span>
            </div>
            <a href={repoLink} target="_blank" rel="noreferrer">
                <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="GitHub icon" />
            </a>
        </button>
    );
};

export default ProjectBox;