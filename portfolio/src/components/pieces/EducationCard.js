import './EducationCard.css';

const EducationCard = ({ id, logoFileName, logoAltText, degree, stateFileName, stateAltText, date, fieldName, specialization, school }) => {
    return (
        <li className="education-card">
            <div id={id}>
                <img className="logo" src={`/images/logos/${logoFileName}`} alt={logoAltText} /><br />
                <span className="degree">{degree}</span>
                <img className="state" src={`/images/states/${stateFileName}`} alt={stateAltText} /><br />
                <span className="date">{date}</span>
                <h3>{fieldName}</h3>
                <p>{specialization}</p>
                <p>{school}</p>
            </div>
        </li>
    );
}

export default EducationCard;