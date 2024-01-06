import axios from 'axios';
import axiosHandler from './axiosHandler';

export const fetchAllAssignments = async () => {
    const res = await axios.get('https://edusync-server.vercel.app/assignments');
    return res?.data;
}

export const fethSolutions = async () => {
    try {
        const res = await axiosHandler.get('/solutions');
        return res?.data;
    } catch (error) {
        return Promise.reject(error);
    }
}
