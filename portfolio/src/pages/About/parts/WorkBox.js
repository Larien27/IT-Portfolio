import './WorkBox.css';

const WorkBox = ({ logoFileName, date, position, company, description }) => {
    return (
        <li className="work-box">
            <div className="first-column">
                <img className="work-logo" src={`${process.env.PUBLIC_URL}/images/logos/${logoFileName}`} alt={`${company} logo`} />
            </div>
            <div className="second-column">
                <h3>{position}</h3>
                <span className="company">{company}</span>
                <span className="date">{date}</span><br />
                <p className="description">{description}</p>
            </div>
        </li>
    );
};

export default WorkBox;