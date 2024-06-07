import './EducationCard.css';

const EducationCard = ({ schoolColor, logoFileName, logoAltText, degree, stateFileName, stateAltText, date, fieldName, specialization, school, description }) => {
    return (
        <li className="education-card">
            <div>
                <img className="logo" style={{ backgroundColor: schoolColor }} src={`/images/logos/${logoFileName}`} alt={logoAltText} /><br />
                <span className="degree">{degree}</span>
                <img className="state" src={`/images/states/${stateFileName}`} alt={stateAltText} /><br />
                <span className="date">{date}</span>
                <h3>{fieldName}</h3>
                <p className="school">{school}</p>
                <hr />
                <p className="specialization">{specialization}</p>
                
                <p className="description">{description}</p>
            </div>
        </li>
    );
}

export default EducationCard;