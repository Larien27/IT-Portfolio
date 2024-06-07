import './About.css';
import EducationCard from './pieces/EducationCard';
import LanguageBox from './pieces/LanguageBox';
import ITSkillBox from './pieces/ITSkillBox';
import educationCardData from '../data/educationCardsData.json';
import languageBoxData from '../data/languageBoxesData.json';
import ITSkillBoxData from '../data/ITSkillBoxesData.json';

const About = () => {
    return (
        <div id="about" className="section">
            <h1>About Me</h1>
            <p>I am a Czech IT student with passion for web development.</p>
            <div id="education">
                <h2>&lt; Education &gt;</h2>
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
                            description={card.description}
                        />
                    ))}
                </ul>
            </div>
            <div id="it-skills">
                <h2>&lt; <span style={{ textTransform: "uppercase" }}>IT</span> skills &gt;</h2>
                <ul>
                    {ITSkillBoxData.map((skill) => (
                        <ITSkillBox
                            technology={skill.technology}
                            logoFileName={skill.logoFileName}
                        />
                    ))}
                </ul>
            </div>
            <div id="work-experience">
                <h2>&lt; Work Experience &gt;</h2>
            </div>
            <div id="languages">
                <h2>&lt; Languages &gt;</h2>
                <ul>
                    {languageBoxData.map((language) => (
                        <LanguageBox
                            language={language.language}
                            flagFileName={language.flagFileName}
                            flagAltText={language.flagAltText}
                            level={language.level}
                            levelText={language.levelText}
                        />
                    ))}
                </ul>
            </div>
            <div id="knowledge"></div>
        </div>
    );
};

export default About;