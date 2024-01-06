import axios from 'axios';

const axiosHandler = axios.create({
    baseURL: 'https://edusync-server.vercel.app',
    withCredentials: true
})

axiosHandler.interceptors.response.use(response => {
    return response;
}, error => {
    // if (error?.response?.status === 401 || error?.response?.status === 400) {
    return Promise.reject(error);
    // }
})

export default axiosHandler;