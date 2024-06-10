import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="section">
            <h1>Contact Me</h1>
            <form>
                <label>Name:</label>
                <input type="text" />
                <label>Email:</label>
                <input type="email" />
                <label>Message:</label>
                <textarea rows="8" />

                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;