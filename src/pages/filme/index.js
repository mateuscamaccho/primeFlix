import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../service/api';
import './style.css';
function Filme() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [detalhes, setDetalhes] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: "3e4b888d5a0054cf5094520732882528",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    // console.log(response.data)
                    setDetalhes(response.data)
                    setLoading(false)
                })
                .catch(() => {
                    // console.log('nao encontrado')
                    navigate("/", { replace: true })
                })
        }
        loadFilme()


        return () => {
            // console.log('Componente desmontado!')
        }

    }, [id, navigate])

    function salvarFilme() {
        //acessando e guardando dados do local storage
        const minhaLista = localStorage.getItem("@primeflix")

        //se nao tiver dados inicia a variavel como um array vazio
        let filmesSalvos = JSON.parse(minhaLista) || [];

        //verifica se o id do filme salvo é o mesmo dde algum que já esta salvo
        const hasFilmes = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === detalhes.id);
        //se for entra aqui e para a execução
        if (hasFilmes) {
            toast.warn("Esse filme já esta em favoritos!")
            return;
        }

        //se não coloca o array em filmesalvos, transforma em string com o stringify e adiciona ao localstorage
        filmesSalvos.push(detalhes)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso!")
    }


    if (loading) {
        return (
            <div className='loading'>
                Carregando filmes...
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <img className='' src={`https://image.tmdb.org/t/p/original${detalhes.backdrop_path}`} alt={detalhes.id} />
            <div className='info-container'>
                <div className='detalhe1'>
                    <h2>Titulo: {detalhes.title}</h2>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                        </svg>&nbsp;
                        <span>
                            {detalhes.vote_average.toFixed(1)} / 10
                        </span>
                    </div>
                    <div>
                        Lancamento: {detalhes.release_date}
                    </div>
                </div>
                <div className='sinopse'>
                    <h3>Sinopse:</h3>
                    <hr />
                    {detalhes.overview}
                </div>
                <div className='btns'>
                    <button className='btn-info' onClick={salvarFilme}>Salvar</button>
                    <a className='btn-info' href={`https://www.youtube.com/results?search_query=${detalhes.title} Trailer`} target="blank" rel="external">Trailer</a>
                </div>
            </div>

        </div>
    )
}

export default Filme;