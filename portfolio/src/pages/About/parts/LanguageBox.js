import './LanguageBox.css';

const getLevelInfo = (level) => {
    let levelValue;
    let levelText;

    switch (level) {
        case 'A1':
            levelValue = 1;
            levelText = 'Beginner';
            break;
        case 'A2':
            levelValue = 2;
            levelText = 'Elementary';
            break;
        case 'B1':
            levelValue = 3;
            levelText = 'Intermediate';
            break;
        case 'B2':
            levelValue = 4;
            levelText = 'Upper-Intermediate';
            break;
        case 'C1':
            levelValue = 5;
            levelText = 'Advanced';
            break;
        case 'C2':
            levelValue = 6;
            levelText = 'Proficient';
            break;
        default:
            levelValue = 0;
            levelText = 'Unknown';
    }

    return [levelValue, levelText];
}

const LanguageBox = ({ language, flagFileName, flagAltText, level }) => {
    const levelValue = getLevelInfo(level)[0];
    const levelText = getLevelInfo(level)[1];
    
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
};

export default LanguageBox;