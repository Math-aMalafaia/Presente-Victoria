import './TimeLine.css';
import PointTime from './PointTime';
import { timeLine } from '../../../../data/TimeLine';
import { useRef, useState } from 'react';
import { CaretLeftIcon, CaretRightIcon  } from '@phosphor-icons/react/dist/ssr';

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
                inline: 'center',
                block: 'nearest'
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
                inline: 'center',
                block: 'nearest'
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
                    >
                        <CaretLeftIcon size={24} weight='bold'/>
                    </button>

                    <span>
                        {currentPoint + 1} / {timeLineList.length}
                    </span>

                    <button 
                        onClick={nextPoint}
                        disabled={currentPoint === timeLineList.length - 1}
                    >
                        <CaretRightIcon size={24} weight='bold'/>
                    </button>
                </div>

                <div className='timeLine-Text'>
                    <div className='timeLine-content' ref={timeLineRef}>
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
                    <div className='timeline-indicators'>
                        {timeLineList.map((_, index) => (
                            <span 
                                key={index}
                                className={
                                    index === currentPoint
                                        ? 'active'
                                        : ''
                                }
                            />
                        ))}
                    </div>

            </div>
        </>
    )
}

export default TimeLine;