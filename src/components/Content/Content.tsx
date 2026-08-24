import './Content.css'
import Gallery from './Components-Content/Gallery/Gallery'
import Letters from './Components-Content/Letters/Letters'
import TimeLine from './Components-Content/TimeLine/TimeLine';

function Content(){
    return(
        <main className="content">
            <div className="content-text">
                <h1>Bem-vindo Meu Amor!</h1>
                <p>Aqui você irar passar por uma esperiencia sobre nossa historia.</p>
            </div>

            <Gallery limit={7}/>

            <Letters />

            <TimeLine />
        </main>
    )
}

export default Content;