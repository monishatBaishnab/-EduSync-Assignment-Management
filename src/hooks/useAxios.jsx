import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxios = () => {
    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        console.log(error,"from axios interceptors...");
    })
    return instance;
};

export default useAxios;