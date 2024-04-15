import axios from 'axios'
import Cookies from 'js-cookie';

const baseURL = "http://localhost:5000";

export function getAllSongs(limit, offset) {
    const response = axios.get(`${baseURL}/song`, {
        params: {
            limit,
            offset
        }
    });
    return response;
}

export function getUserSongs() {
    const response = axios.get(`${baseURL}/song/byUser`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response;
}