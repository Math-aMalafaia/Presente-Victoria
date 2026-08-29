import { useState } from 'react';
import './Img.css'
import { Image, HeartStraight } from '@phosphor-icons/react';

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
                    <Image weight='fill'/>
                    <h3>{title}</h3>
                </div>
                <div className='img-description'>
                    <HeartStraight weight='fill'/>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ImgMemory;