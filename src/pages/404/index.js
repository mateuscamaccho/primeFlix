import { Link } from 'react-router-dom';

import './style.css'

function Erro() {
    return (
        <div className='erro'>
            <h2>Error 404</h2>
            Ops, acho que essa pagina não existe!!
            <Link to="/">Ver todos os filmes</Link>
        </div>
    )
}

export default Erro;