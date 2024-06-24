import './MainPage.css';

const MainPage = () => {
    return (
        <div id="main" className="section">
            <div id="text-photo-section">
                <div className="title">
                    <h1>Lucie Bekeová</h1>
                    <span id="subtitle">Junior web developer</span>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/logos-map.png`} alt="Technologies logos map" />
            </div>
            <div id="link-buttons">
                <a href={`${process.env.PUBLIC_URL}/about`} className="link-button">More about me!</a>
                <a href="/projects" className="link-button">Something about my projects</a>
                <a href="/contact" className="link-button">How to contact me</a>
            </div>
        </div>
    );
};

export default MainPage;