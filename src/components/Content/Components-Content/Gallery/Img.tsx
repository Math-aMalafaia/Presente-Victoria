import { useState } from 'react';
import './Img.css'

interface ImgProps {
    img: string;
    title: string;
    description: string;
}

function ImgMemory({ img, title, description }: ImgProps) {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`img ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <img src={img} alt={title} className='img-img'/>
            <div className='img-text'>
                <div className='img-title'>
                    <h3>{title}</h3>
                </div>
                <div className='img-description'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ImgMemory;