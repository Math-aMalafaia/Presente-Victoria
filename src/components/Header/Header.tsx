import './Header.css'

function Header(){
    return(
        <>
            <header className='header'>
                <div className="header-content">
                    <div>
                        <h2 className="header-logo">VicMath</h2>
                    </div>

                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li className="header-nav-item"><a href="">Home</a></li>
                            <li className="header-nav-item"><a href="">Carta</a></li>
                            <li className="header-nav-item"><a href="">TimeLine</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;