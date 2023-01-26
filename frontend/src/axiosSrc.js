import axios from 'axios';

const token = localStorage.getItem('token');

export const instance = axios.create(
    {
        baseURL: `https://backend-6tl3v4vua-tlmuunulzii-gmailcom.vercel.app/`,
        headers: {
            token,
            "Content-type": "application/json; charset=UTF-8",
            "app-id": "636a0100b23c1794f297d097"
        }
    }
);