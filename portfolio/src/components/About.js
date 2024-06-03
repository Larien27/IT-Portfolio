import './About.css';
import EducationCard from './pieces/EducationCard';
import educationCardData from '../data/educationCardsData.json';

const About = () => {
    return (
        <div id="about" className="section">
            <h1>About Me</h1>
            <p>I am a Czech IT student with passion for web development.</p>
            <div id="education">
                <h2>&lt;Education&gt;</h2>
                <ul>
                    {educationCardData.map((card) => (
                        <EducationCard
                            schoolColor={card.schoolColor}
                            logoFileName={card.logoFileName}
                            logoAltText={card.logoAltText}
                            degree={card.degree}
                            stateFileName={card.stateFileName}
                            stateAltText={card.stateAltText}
                            date={card.date}
                            fieldName={card.fieldName}
                            specialization={card.specialization}
                            school={card.school}
                        />
                    ))}
                </ul>
            </div>
            <div id="work experience"></div>
            <div id="knowledge"></div>
        </div>
    );
};

export default About;