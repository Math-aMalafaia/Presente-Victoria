import './Footer.css'

function Footer(){
    return(
        <>
        <footer className='footer'>
          <div className="footer-content">
            <div className="footer-text">
              <h2 className="footer-logo">VicMath</h2>

              <p>
                Olá, meu amor. Espero que tenha amado esse presente.
                Sei que ainda tem poucas coisas por aqui, mas, com o passar do tempo,
                vou preenchê-lo com cada vez mais memórias, histórias e momentos nossos,
                até que ele se torne tão grande quanto todo o amor que sinto por você. ❤️
              </p>
            </div>
            
            <nav className="footer-nav">

              <h3 className="footer-nav-title"> Navegação </h3>
              <ul className='footer-nav-list'>
                <li className='footer-nav-item'><a href="#">Home</a></li>
                <li className='footer-nav-item'><a href="#">Carta</a></li>
                <li className='footer-nav-item'><a href="#">TimeLine</a></li>
              </ul>
            </nav>
          </div>
        </footer>
        </>
    )
}
export default Footer;