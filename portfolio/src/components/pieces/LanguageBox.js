import './LanguageBox.css';

const getLevelValue = (level) => {
    let levelValue;

    switch (level) {
        case 'A1':
            levelValue = 1;
            break;
        case 'A2':
            levelValue = 2;
            break;
        case 'B1':
            levelValue = 3;
            break;
        case 'B2':
            levelValue = 4;
            break;
        case 'C1':
            levelValue = 5;
            break;
        case 'C2':
            levelValue = 6;
            break;
        default:
            levelValue = 0;
    }

    return levelValue;
}

const LanguageBox = ({ language, flagFileName, flagAltText, level, levelText }) => {
    const levelValue = getLevelValue(level);
    
    return (
        <li className="language-box">
            <div>
                <img className="flag" src={`/images/flags/${flagFileName}`} alt={flagAltText} />
                <progress value={levelValue} max="6"></progress>
                <h3>{language}</h3>
                <p>{level} ({levelText})</p>
            </div>
        </li>
    );
}

export default LanguageBox;