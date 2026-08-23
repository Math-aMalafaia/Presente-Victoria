import './TimeLine.css';
import PointTime from './PointTime';

function TimeLine(){
    return(
        <>
            <div className="timeLine">
                <h2>Time Line</h2>
                <p>Confira a nossa propria Linha do Tempo</p>

                <PointTime 
                title="Final do Ano"
                data="31/12/25 & 01/01/26"
                description="Neste dia, foi o começo de toda a nossa amizade"
                />
                
                <PointTime 
                title="Brasil x Marrocos"
                data="13/06/26"
                description="Neste dia devo dizer que eu ja  estva gostando de você"
                />

                <PointTime 
                title="Quando eu te escolhi"
                data="26/06/26"
                description="É iconico esse ter sido seu aniversario, mas eu me refiro aquela conversar que tivemos"
                />
                
                <PointTime 
                title="Aniversario"
                data="26/06/26"
                description="Não posso mentir neste dia, eu fiquei uma boa parte do tempo pensando se não poderiamos ficar jutos e ate dei alguma investidas"
                />

                <PointTime
                img='src/assets/Memory/Somos-1.jpg'
                title="Somos 1"
                data="27/06/26"
                description="Deve dizer que neste dia, eu fiquei muito ancioso para te enconra novamente"
                />

            </div>
        </>
    )
}

export default TimeLine;