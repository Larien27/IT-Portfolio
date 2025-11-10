import { Link } from 'react-router-dom';
import './MainPage.scss';

const MainPage = () => {
    return (
        <div id="main" className="section">
            <div id="text-photo-section">
                <div className="title">
                    <h1>Lucie Bekeová</h1>
                    <span id="subtitle">Web developer</span>
                </div>
                <img src="/images/logos-map.png" alt="Technologies logos map" />
            </div>
            <div id="link-buttons">
                <Link to="/about" className="link-button">More about me!</Link>
                <Link to="/projects" className="link-button">Something about my projects</Link>
                <Link to="/contact" className="link-button">How to contact me</Link>
            </div>
        </div>
    );
};

export default MainPage;