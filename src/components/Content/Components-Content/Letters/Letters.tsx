import './Letters.css';
import LoveLetter from './Love-Letter';
import { letters } from '../../../../data/Letters';

interface LettersProps {
    limit?: number;
}

function Letters({limit}: LettersProps){

    const letterList = Object.values(letters);

    const displayedLetters =  limit
        ? letterList.slice(0, limit)
        : letterList;
    return(
        <div className="letters">
            <h2>Cartas</h2>
            <p>Confira algumas das nossas cartas!</p>

            <div className="letters-text">
                {(displayedLetters.map(
                    (letters) => (
                        <LoveLetter 
                        key={letters.id} 
                        title={letters.title}
                        text={letters.text}
                        />
                    )
                ))}
            </div>
        </div>
    )   
}

export default Letters;

//Quando tudo me lembra você, eu sinto uma saudade imensa. Cada detalhe do meu dia me faz pensar em você, e mesmo que estejamos distantes, sinto sua presença em cada momento.", "Eu espero que um dia possamos estar juntos novamente, e que possamos compartilhar todos os momentos que a vida nos reserva. Até lá, guardo você no meu coração, sempre.