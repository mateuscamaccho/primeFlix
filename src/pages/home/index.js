import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../service/api';
import './style.css'


function Home() {
    let { id } = useParams();
    let page = id;
    let nextPage = 0;
    let previusPage = 0;
    
    if (page == NaN || page == '' || page == 'NaN' ) { 
        page = 1;
    }
    
    nextPage = parseInt(page) + 1;
    previusPage = parseInt(page) - 1;
    
    if (previusPage <= 0) {
        previusPage = 1;
    }
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "3e4b888d5a0054cf5094520732882528",
                    language: "pt-BR",
                    page: page
                }
            })

            // console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results);
        }

        loadFilmes();

    }, [])

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "3e4b888d5a0054cf5094520732882528",
                    language: "pt-BR",
                    page: page
                }
            })

            // console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results);
        }

        loadFilmes();

    }, [id])



    return (
        <div className='container'>
            <div className='prevNextPage'>
                <Link to={`/pagina/${previusPage}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                </Link>
                <Link to={`/pagina/${nextPage}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </Link>
            </div>
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
            <div className='prevNextPage'>
                <Link to={`/pagina/${previusPage}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                </Link>
                <Link to={`/pagina/${nextPage}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </Link>
            </div>
        </div>

    )
}

export default Home;