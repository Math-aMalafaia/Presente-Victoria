import './Love-Letter.css';

interface LoveProps{
    title: string;
    text: string[]
}

function LoveLetter({title, text}: LoveProps){
    return(
        <>
            <div className="love-letter">
                <h3 className="love-letter-title">{title}</h3>
                <div className="love-letter-content">
                    {text.map((line, index) => (
                        <p className="love-letter-text" key={index}>{line}</p>
                    ))}
                </div>
            </div>    
        </>
    )
}

export default LoveLetter;