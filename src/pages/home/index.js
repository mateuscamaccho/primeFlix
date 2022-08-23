import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../service/api';
import './style.css'


function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "3e4b888d5a0054cf5094520732882528",
                    language: "pt-BR",
                    page: 1
                }
            })

            // console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results);
            setLoading(false)
        }

        loadFilmes();

    }, [])


    if (loading) {
        return (
            <div className='loading'>
                Carregando filmes...
            </div>
        )
    }


    return (
        <div className='container'>

            <div className='container-filmes'>
                {filmes.map((filme) => {

                    return (
                        <article key={filme.id}>
                            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                            <h3>
                                <strong> {filme.title} </strong>
                            </h3>

                            <p className='nota'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                </svg>
                                <span>
                                    {filme.vote_average} -
                                </span>
                                <span>
                                    Total: {filme.vote_count} Votos
                                </span>
                            </p>

                            <Link to={`/filme/${filme.id}`} className="btn-detalhe">Ver detalhes</Link>
                        </article>
                    )
                })}
            </div>

        </div>

    )
}

export default Home;