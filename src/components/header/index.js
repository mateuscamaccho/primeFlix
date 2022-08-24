import './style.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <span className='color1'>
                    <Link to='/'>
                        Prime
                    </Link>
                </span>
                <span className='color2'>
                    <Link to='/'>
                        Flix
                    </Link>
                </span>
            </div>
            <div className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/favoritos'>Meus Filmes</Link>
            </div>
        </header>
    )
}

export default Header;