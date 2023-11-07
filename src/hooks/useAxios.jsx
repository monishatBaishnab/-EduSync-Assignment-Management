import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
})
const useAxios = () => {
    const auth = useAuth();

    if (auth) {
        instance.interceptors.response.use(
            response => {
                return response;
            },
            async error => {
                if (error?.response?.status === 401 || error?.response?.status === 400) {
                    auth.signOutUser();
                    toast.error('Unauthorized access.');
                }
            })
    }
    return instance;
};

export default useAxios;