import './LanguageBox.css';

const LanguageBox = ({ language, flagFileName, flagAltText, level, levelText }) => {
    return (
        <li className="language-box">
            <div>
                <img className="flag" src={`/images/flags/${flagFileName}`} alt={flagAltText} />
                <h3>{language}</h3>
                <p>{level} ({levelText})</p>
            </div>
        </li>
    );
}

export default LanguageBox;