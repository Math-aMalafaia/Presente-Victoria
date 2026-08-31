import './Music.css';
import MusicCard from './MusicCard';
import { music } from '../../../../data/Music'

interface MusicProps{
    limit?: number;
}

function Music({ limit }: MusicProps) {
    const musicList = Object.values(music);

    const displayedMusic = limit
        ? musicList.slice(0, limit)
        : musicList;

    return(
        <div className='music'>
            <div className='music-title'>
                <h2>Nossas Musicas</h2>
                <p>As musicas que sempre me fazem lembrar de você</p>
            </div>

            <div className='music-list'> 
                {displayedMusic.map((music) => (
                    <MusicCard 
                        key={music.id}
                        title={music.title}
                        artist={music.artist}
                        description={music.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Music;