import './MusicCard.css';
import { useState } from 'react';
import { MusicNote, Play, Pause } from '@phosphor-icons/react';

interface MusicCardProps{
    title: string;
    artist: string;
    description: string;
}

function MusicCard({title, artist, description}: MusicCardProps){

    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] =useState(false);

    return(
        <div className={`music-card ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className='music-card-header'>
                <div className='music-icon'>
                    <MusicNote weight="duotone" />
                </div>

                <div className='music-info'>
                    <h3>{title}</h3>

                    <p>{artist}</p>
                </div>
            </div>

            <div className='music-card-content'>
                <p className='music-card-description'>{description}</p>

                <div className='music-controls'>
                    <button className='music-play' onClick={(event) => {
                        event.stopPropagation();
                        setIsPlaying(!isPlaying)
                    }}>
                        {isPlaying
                            ? <Pause weight='fill' />
                            : <Play weight='fill' />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MusicCard;