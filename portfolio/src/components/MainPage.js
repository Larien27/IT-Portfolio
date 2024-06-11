import './MainPage.css';

const MainPage = () => {
    return (
        <div id="main" className="section">
            <h1>Lucie Bekeová</h1>
            <span id="subtitle">Junior web developer</span>
            <div id="text-photo-section">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec malesuada ante. Donec vehicula ultricies diam, tempor mattis justo pharetra vitae. Mauris varius est at mi venenatis consectetur. Nunc sit amet ante lacinia, finibus nulla imperdiet, sollicitudin enim. Vivamus hendrerit arcu et ipsum laoreet, ac pretium quam gravida. In scelerisque sollicitudin mauris nec ornare. Nunc aliquet sapien ut leo lacinia, in auctor neque facilisis. Sed id venenatis metus, vel blandit nisi. Aliquam pulvinar faucibus sodales.</p>
                <img src="https://placehold.co/400x300" alt="placeholder img" />
            </div>
            <div id="link-buttons">
                <a href="/about" className="link-button">Something about me</a>
                <a href="/projects" className="link-button">Something about my projects</a>
                <a href="/contact" className="link-button">How to contact me</a>
            </div>
        </div>
    );
};

export default MainPage;