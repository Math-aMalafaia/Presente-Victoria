import './Content.css'
import Gallery from './Components-Content/Gallery/Gallery'

function Content(){
    return(
        <main className="content">
            <div className="content-text">
                <h1>Bem-vindo Meu Amor!</h1>
                <p>Aqui você irar passar por uma esperiencia sobre nossa historia.</p>
            </div>

            <Gallery />
        </main>
    )
}

export default Content;