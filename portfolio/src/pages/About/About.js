import './About.css';
import EducationCard from './parts/EducationCard';
import LanguageBox from './parts/LanguageBox';
import ITSkillBox from './parts/ITSkillBox';
import educationCardData from '../../data/educationCardsData.json';
import languageBoxData from '../../data/languageBoxesData.json';
import ITSkillBoxData from '../../data/ITSkillBoxesData.json';
import WorkBox from './parts/WorkBox';

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
                <ul>
                    <WorkBox
                        logoFileName="brand-elevator.png"
                        date="July 2022 – June 2024"
                        position="Web Development Specialist"
                        company="BrandElevator"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt cursus luctus. Sed dignissim mollis quam, vitae egestas massa dignissim sed. Praesent nisi neque, egestas ut dignissim ac, laoreet vel purus. Praesent bibendum ex at dictum eleifend. Mauris sagittis finibus mauris, eu tincidunt risus lacinia nec. Nam at laoreet ante, nec consectetur libero. Cras vitae dictum nisi, non congue erat."
                    />
                </ul>
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