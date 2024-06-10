import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

export const axiosUploadInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
});

axiosInstance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${typeof window !== 'undefined' ? window.localStorage.getItem('token') : ''}`;

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);