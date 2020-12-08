import axios from 'axios';
const baseURL = 'http://localhost:5000'
//const baseURL = 'https://freelaah.herokuapp.com/'
const api = axios.create({baseURL: baseURL});

api.interceptors.request.use(async config => {

    const token = localStorage.getItem('token')
    //getToken();

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})


export default api;