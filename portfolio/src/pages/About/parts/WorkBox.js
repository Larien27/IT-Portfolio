import './WorkBox.css';

const WorkBox = ({ logoFileName, date, position, company, description }) => {
    return (
        <li className="work-box">
            <div>
                <div class="image-mask">
                    <img className="work-logo" src={`/images/logos/${logoFileName}`} alt={`${company} logo`} />
                </div>
                <span className="date">{date}</span>
                <h3>{position}</h3>
                <span>{company}</span>
                <p className="description">{description}</p>
            </div>
        </li>
    );
}

export default WorkBox;