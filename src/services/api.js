import axios from 'axios';
//const baseURL = 'http://localhost:5000'
const baseURL = 'http://140.238.186.239:5000' //oracle

const api = axios.create({baseURL: baseURL});

api.baseURL = baseURL;

api.interceptors.request.use(async config => {

    const token = localStorage.getItem('token')
    //getToken();

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})


export default api;
