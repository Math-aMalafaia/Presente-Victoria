import './Img.css'

interface ImgProps {
    img: string;
    title: string;
    description: string;
}

function ImgMemory({ img, title, description }: ImgProps) {
    return (
        <div className="img">
            <img src={img} alt={title} className='img-img'/>
            <div className="img-text">
                <h3 className='img-title'>{title}</h3>
                <p className='img-description'>{description}</p>
            </div>
        </div>
    );
}

export default ImgMemory;