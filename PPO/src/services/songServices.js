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

export function createSong(data) {
    const response = axios.post(`${baseURL}/song/create`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        },
    });
    return response;
}

export function deleteSong(songId) {
    const response = axios.delete(`${baseURL}/song/delete/${songId}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response;
}

export function editSong(songId, newData) {
    try {
        const response = axios.patch(`${baseURL}/song/update/${songId}`, newData, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao editar música:", error);
        throw error;
    }
}