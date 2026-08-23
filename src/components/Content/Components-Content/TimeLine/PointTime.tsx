import './PointTime.css';

interface PointProps{
    title: string;
    data: string;
    description: string;
    img?: string;
}

function PointTime({title, data, description, img}: PointProps) {
    return(
        <>
            <div className='pointTime'>
                <div className='pointTime-marker'>
                    <span>{data}</span>
                </div>
                <div className='pointTime-card'>
                    {img && (
                        <img src={img} alt={title} className='pointTime-img'/>
                    )}
                    <h4 className='pointTime-title'>{title}</h4>
                    <p className='pointTime-text'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default  PointTime;