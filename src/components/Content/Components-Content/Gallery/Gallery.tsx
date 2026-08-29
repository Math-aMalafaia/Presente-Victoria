import './Gallery.css'
import ImgMemory from './Img'
import { memory } from "../../../../data/Memories"
import { Images } from '@phosphor-icons/react';

interface GalleryProps {
    limit?: number;
}

function Gallery({limit}: GalleryProps){

    const memoryList = Object.values(memory);

    const displayedMemories = limit
        ? memoryList.slice(0, limit)
        : memoryList;   
    return(
        <>
            <div className='gallery-title'>
                <h2> <Images weight='duotone'/> Galeria de Imagens</h2>
                <p>Confira algumas das nossas fotos memoráveis!</p>
            </div>

            <div className='gallery'>  
                {displayedMemories.map(
                    (memory) => (
                        <ImgMemory 
                            key={memory.id}
                            img={memory.img}
                            title={memory.title}
                            description={memory.description}
                        />
                    ))}
            </div>
        </>
    )
}

export default Gallery;