import './About.css';

const About = () => {
    return (
        <div id="about" className="section">
            <h1>About Me</h1>
            <p>I am a Czech IT student with passion for web development.</p>
            <div id="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <div id="cvut">
                            <img className="logo" src="/images/logos/cvut.png" alt="CTU logo" /><br />
                            <span className="degree">Bc.</span>
                            <img className="state" src="/images/states/cr.png" /><br />
                            <span className="date">September 2021 – Now</span>
                            <h3>Software Engineering and Technology</h3>
                            <p>Bachelor's Degree, Specialization: Technology for Multimedia and Virtual Reality<br />
                            Faculty of Electrical Engineering, Czech Technical University, Czech Republic</p>
                        </div>
                    </li>
                    <li>
                        <div id="ksu">
                            <img className="logo" src="/images/logos/ksu.png" alt="KSU logo" /><br />
                            <span className="date">January 2024 – May 2024</span>
                            <h3>Computer Science</h3>
                            <p>Study Exchange Program<br />
                            Kansas State University, USA</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="work experience"></div>
            <div id="knowledge"></div>
        </div>
    );
};

export default About;