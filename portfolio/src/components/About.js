import './About.css';
import EducationCard from './pieces/EducationCard';

const About = () => {
    return (
        <div id="about" className="section">
            <h1>About Me</h1>
            <p>I am a Czech IT student with passion for web development.</p>
            <div id="education">
                <h2>Education</h2>
                <ul>
                    <EducationCard
                        id="cvut"
                        logoFileName="cvut.png"
                        logoAltText="CTU logo"
                        degree="Bc."
                        stateFileName="cr.png"
                        stateAltText="Czech Republic map"
                        date="September 2021 – Now"
                        fieldName="Software Engineering and Technology"
                        specialization="Specialization: Technology for Multimedia and Virtual Reality"
                        school="Faculty of Electrical Engineering, Czech Technical University"
                    />
                    <EducationCard
                        id="ksu"
                        logoFileName="ksu.png"
                        logoAltText="KSU logo"
                        degree="Bc."
                        stateFileName="usa.png"
                        stateAltText="US map"
                        date="January 2024 – May 2024"
                        fieldName="Computer Science"
                        specialization="Study Exchange Program"
                        school="College of Arts and Sciences, Kansas State University"
                    />
                </ul>
            </div>
            <div id="work experience"></div>
            <div id="knowledge"></div>
        </div>
    );
};

export default About;