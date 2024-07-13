import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav id="navbar">
            <span><Link to="/">Lucie Bekeová</Link></span>
            <ul>
                <li className="desktop"><Link to="/about">About</Link></li>
                <li className="mobile"><Link to="/about"><img src={`${process.env.PUBLIC_URL}/images/about.png`} className="icon" alt="About icon" /></Link></li>
                <li className="desktop"><Link to="/projects">Projects</Link></li>
                <li className="mobile"><Link to="/projects"><img src={`${process.env.PUBLIC_URL}/images/projects.png`} className="icon" alt="Projects icon" /></Link></li>
                <li className="desktop"><Link to="/contact">Contact</Link></li>
                <li className="mobile"><Link to="/contact"><img src={`${process.env.PUBLIC_URL}/images/contact.png`} className="icon" alt="Contact icon" /></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;