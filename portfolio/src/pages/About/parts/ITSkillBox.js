import './ITSkillBox.css';

const ITSkillBox = ({ technology, logoFileName }) => {
    return (
        <li className="it-skill-box">
            <div>
                <img className="logo" src={`${process.env.PUBLIC_URL}/images/logos/${logoFileName}`} alt={`${technology} logo`} />
                <h3>{technology}</h3>
            </div>
        </li>
    );
};

export default ITSkillBox;