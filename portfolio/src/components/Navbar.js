import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav id="navbar">
            <span className="menu-item logo"><Link to="/">Lucie Bekeová</Link></span>
            <ul>
                <li className="menu-item desktop"><Link to="/about">About</Link></li>
                <li className="menu-item mobile"><Link to="/about"><img src="/images/about.png" className="icon" alt="About icon" /></Link></li>
                <li className="menu-item desktop"><Link to="/projects">Projects</Link></li>
                <li className="menu-item mobile"><Link to="/projects"><img src="/images/projects.png" className="icon" alt="Projects icon" /></Link></li>
                <li className="menu-item desktop"><Link to="/contact">Contact</Link></li>
                <li className="menu-item mobile"><Link to="/contact"><img src="/images/contact.png" className="icon" alt="Contact icon" /></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;