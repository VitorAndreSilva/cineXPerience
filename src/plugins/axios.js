import axios from "axios";

const token = import.meta.env.VITE_API_TOKEN;

const apiTMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${token}`
    }
});

const apiRAWG = axios.create({
    baseURL: 'http://localhost:3000/'
})

export { apiTMDB, apiRAWG };
