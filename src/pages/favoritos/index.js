import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css';

function Favoritos() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@primeflix');
        setLista(JSON.parse(minhaLista) || []);
    }, [])

    function excluirFilme(id) {
        let filtroFilmes = lista.filter((item) => {
            return (item.id !== id)
        })

        setLista(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.error("Filme excluido da lista de favoritos!")
    }

    return (
        <div className='meus-filmes'>
            <h1>Lista de favoritos</h1>

            {lista.length === 0 && <h2>Você não possuí nenhum filme como favorito!</h2>}
            <ul>
                {lista.map(item => (
                    <li key={item.title}>
                        <strong>{item.title}</strong>

                        <div className='btns'>
                            <Link className='btnLista' to={`/filme/${item.id}`}>Ver Detalhes</Link>
                            <button className='btnLista' onClick={() => excluirFilme(item.id)}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favoritos;