import './About.css';
import EducationCard from './parts/EducationCard';
import LanguageBox from './parts/LanguageBox';
import ITSkillBox from './parts/ITSkillBox';
import educationCardData from '../../data/educationCardsData.json';
import languageBoxData from '../../data/languageBoxesData.json';
import ITSkillBoxesData from '../../data/ITSkillBoxesData.json';
import WorkBox from './parts/WorkBox';
import workExperienceData from '../../data/workExperienceData.json';

const About = () => {
    return (
        <div id="about" className="section">
            <h1>About Me</h1>
            <p>I am a Czech IT student with passion for web development.</p>
            <div id="education">
                <h2>&lt; Education &gt;</h2>
                <ul>
                    {educationCardData.map((card, index) => (
                        <EducationCard
                            key={index}
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
                    {ITSkillBoxesData.programming.map((skill, index) => (
                        <ITSkillBox
                            key={index}
                            technology={skill.technology}
                            logoFileName={`technologies/${skill.logoFileName}`}
                        />
                    ))}
                </ul>

                <h3>&lt; non-programming skills &gt;</h3>
                <ul>
                    {ITSkillBoxesData.other.map((skill, index) => (
                        <ITSkillBox
                            key={index}
                            technology={skill.technology}
                            logoFileName={`other-skills/${skill.logoFileName}`}
                        />
                    ))}
                </ul>
            </div>
            <div id="work-experience">
                <h2>&lt; Work Experience &gt;</h2>
                <ul>
                    {workExperienceData.map((work, index) => (
                        <WorkBox
                            key={index}
                            logoFileName={work.logoFileName}
                            date={work.date}
                            position={work.position}
                            company={work.company}
                            description={work.description}
                        />
                    ))}
                </ul>
            </div>
            <div id="languages">
                <h2>&lt; Languages &gt;</h2>
                <ul>
                    {languageBoxData.map((language, index) => (
                        <LanguageBox
                            key={index}
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