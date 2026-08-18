import './Gallery.css'
import ImgMemory from './Img'

function Gallery(){
    return(
        <>
            <div className='gallery-title'>
                <h2>Galeria de Imagens</h2>
                <p>Confira algumas das nossas fotos memoráveis!</p>
            </div>

            <div>  
                <ImgMemory 
                img="src/assets/Memory/Somos-1.jpg" 
                title="Somos 1" 
                description="Não sei se neste tempo ja dava para notar,
                 porem desde de aquele periodo eu ja ai tinha escolhido" 
                />

                <ImgMemory 
                img="src/assets/Memory/Shoping.jpg" 
                title="Como é Linda" 
                description="Posso dizer, ja tinha recebido muitas fotos, porem por conta da memoria lotada, esse foi a primeira que eu pude salvar, e por isso ela é especial para mim" 
                />
            </div>
        </>
    )
}

export default Gallery;