import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="section">
            <h1>Contact Me</h1>
            <div id="contact-display">
                <a id="email" href="mailto:lucie.beke@gmail.com">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/email.png`} alt="Email icon" /><br />
                        <span>lucie.beke&#64;gmail.com</span>
                    </div>
                </a>
                <a id="linkedin" href="https://www.linkedin.com/in/lucie-bekeova" target="_blank" rel="noreferrer">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="LinkedIn icon" /><br />
                        <span>Lucie Bekeová</span>
                    </div>
                </a>
                <a id="github" href="https://github.com/Larien27" target="_blank" rel="noreferrer">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="GitHub icon" /><br />
                        <span>Larien27</span>
                    </div>
                </a>
            </div>

            <div className="hidden">
                <h2>&lt; Contact form &gt;</h2>
                <form>
                    <label>Name:</label>
                    <input type="text" />
                    <label>Email:</label>
                    <input type="email" />
                    <label>Message:</label>
                    <textarea rows="10" />

                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;