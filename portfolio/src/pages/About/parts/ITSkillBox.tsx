import './ITSkillBox.scss';

interface ITSkillBoxProps {
    technology: string;
    logoFileName: string;
}

const ITSkillBox = ({ technology, logoFileName }: ITSkillBoxProps) => {
    return (
        <li className="it-skill-box">
            <div>
                <img className="logo" src={`/images/logos/${logoFileName}`} alt={`${technology} logo`} />
                <h3>{technology}</h3>
            </div>
        </li>
    );
};

export default ITSkillBox;