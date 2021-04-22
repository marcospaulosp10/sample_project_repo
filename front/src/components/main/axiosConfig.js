import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

instance.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export default instance;