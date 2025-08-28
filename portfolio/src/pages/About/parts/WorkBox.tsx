import './WorkBox.scss';

interface WorkBoxProps {
    logoFileName: string;
    date: string;
    position: string;
    company: string;
    description: string;
}

const WorkBox = ({ logoFileName, date, position, company, description }: WorkBoxProps) => {
    return (
        <li className="work-box">
            <div className="first-column">
                <img className="work-logo" src={`/images/logos/${logoFileName}`} alt={`${company} logo`} />
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