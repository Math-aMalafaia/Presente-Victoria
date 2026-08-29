import './TimeLine.css';
import PointTime from './PointTime';
import { timeLine } from '../../../../data/TimeLine';
import { useRef, useState } from 'react';

function TimeLine(){

    const timeLineList = Object.values(timeLine);

    const timeLineRef = useRef<HTMLDivElement>(null);

    const [currentPoint, setCurrentPoint] = useState(0);

    function nextPoint() {
        
        if (currentPoint >= timeLineList.length - 1) {
            return;
        }
        const nextIndex = currentPoint + 1;

        const points = timeLineRef.current?.querySelectorAll('.pointTime');

        if (points && points[nextIndex]) {

            points[nextIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });

            setCurrentPoint(nextIndex);
        }
    }

    function previousPoint(){
        
        if(currentPoint <= 0){
            return;
        }

        const previousIndex = currentPoint - 1;

        const points = timeLineRef.current?.querySelectorAll('.pointTime');

        if (points && points[previousIndex]) {
            points[previousIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            
            setCurrentPoint(previousIndex);
        }
    }

    return(
        <>
            <div className="timeLine">
                <div className='timeLine-title'>
                    <h2>Time Line</h2>
                    <p>Confira a nossa propria Linha do Tempo</p>
                </div>
                
                <div className='timeLine-controls'>
                    <button 
                        onClick={previousPoint}
                        disabled={currentPoint === 0}
                        aria-label="Memória anterior"
                    >
                        olsa
                    </button>

                    <span>
                        {currentPoint + 1} / {timeLineList.length}
                    </span>

                    <button 
                        onClick={nextPoint}
                        disabled={currentPoint === timeLineList.length - 1}
                        aria-label="Próximo moméria"
                    >
                        ola
                    </button>
                </div>

                <div className='timeLine-Text'>
                    <div className='timeLine-content'>
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

            </div>
        </>
    )
}

export default TimeLine;