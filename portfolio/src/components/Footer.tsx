import './Footer.scss';

const Footer = () => {
    return (
        <div id="footer">
            <p>&copy; 2024-{new Date().getFullYear()} Lucie Bekeová</p>
        </div>
    );
};

export default Footer;