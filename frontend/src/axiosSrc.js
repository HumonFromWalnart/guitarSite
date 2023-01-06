import axios from 'axios';

export const instance = axios.create({
    baseURL : 'http://localhost:1952/',
    headers : {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "636a0100b23c1794f297d097"
    }
});