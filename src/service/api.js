import axios from "axios";

// URL DA API
//  https://api.themoviedb.org/3/'TROCAR SERVIÇO AQUI'?api_key=3e4b888d5a0054cf5094520732882528

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;