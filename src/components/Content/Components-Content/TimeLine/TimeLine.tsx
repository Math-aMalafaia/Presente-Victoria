import './TimeLine.css';
import PointTime from './PointTime';
import { timeLine } from '../../../../data/TimeLine';

function TimeLine(){

     const timeLineList = Object.values(timeLine);
    return(
        <>
            <div className="timeLine">
                <div className='timeLine-title'>
                    <h2>Time Line</h2>
                    <p>Confira a nossa propria Linha do Tempo</p>
                </div>
                
                <div className='timeLine-line'></div>
                
                <div className='timeLine-Text'>
                    {(timeLineList.map(
                        (timeLine) => (
                            <PointTime 
                                key={timeLine.year} 
                                title={timeLine.title}
                                data={timeLine.date}
                                description={timeLine.description}
                                img={timeLine.img}
                            />
                        )
                    ))}
                </div>

            </div>
        </>
    )
}

export default TimeLine;