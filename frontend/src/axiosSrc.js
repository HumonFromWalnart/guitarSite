import axios from 'axios';

const token = localStorage.getItem('token');

export const instance = axios.create(
    {
        baseURL: 'http://localhost:6969',
        // baseURL: `https://backend-two-rho.vercel.app/`,
        headers: {
            token,
            "Content-type": "application/json; charset=UTF-8",
            "app-id": "636a0100b23c1794f297d097"
        }
    }
);