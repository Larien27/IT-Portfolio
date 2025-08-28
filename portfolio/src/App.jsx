import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/Main/MainPage';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
