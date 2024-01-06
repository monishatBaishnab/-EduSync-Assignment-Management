import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
})

const useAxiosSecure = () => {
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

export default useAxiosSecure;