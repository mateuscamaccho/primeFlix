import './style.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <span className='color1'>
                    <Link to='/pagina/1'>
                        Prime
                    </Link>
                </span>
                <span className='color2'>
                    <Link to='/pagina/1'>
                        Flix
                    </Link>
                </span>
            </div>
            <div className='menu'>
                <Link to='/pagina/1'>Home</Link>
                <Link to='/filme'>Meus Filmes</Link>
            </div>
        </header>
    )
}

export default Header;