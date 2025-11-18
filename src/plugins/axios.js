import axios from "axios";

const token = import.meta.env.VITE_API_TOKEN;
const key = import.meta.env.VITE_API_KEY;

const apiTMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${token}`
    }
});

const apiRAWG = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    headers: {
        Authorization: `Bearer ${key}`
    }
})

export { apiTMDB, apiRAWG };