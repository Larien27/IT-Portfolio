import './EducationCard.scss';

interface EducationCardProps {
    schoolColor: string;
    logoFileName: string;
    logoAltText: string;
    degree: string;
    stateFileName: string;
    stateAltText: string;
    date: string;
    fieldName: string;
    specialization: string;
    school: string;
    description: string;
}

const EducationCard = ({ schoolColor, logoFileName, logoAltText, degree, stateFileName, stateAltText, date, fieldName, specialization, school, description }: EducationCardProps) => {
    return (
        <li className="education-card">
            <div>
                <img className="logo" style={{ backgroundColor: schoolColor }} src={`${process.env.PUBLIC_URL}/images/logos/${logoFileName}`} alt={logoAltText} /><br />
                <span className="degree">{degree}</span>
                <img className="state" src={`${process.env.PUBLIC_URL}/images/states/${stateFileName}`} alt={stateAltText} /><br />
                <span className="date">{date}</span>
                <h3>{fieldName}</h3>
                <p className="school">{school}</p>
                <hr />
                <p className="specialization">{specialization}</p>
                
                <p className="description">{description}</p>
            </div>
        </li>
    );
};

export default EducationCard;