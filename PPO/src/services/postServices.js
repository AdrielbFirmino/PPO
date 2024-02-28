import axios from 'axios'
import Cookies from 'js-cookie';

const baseURL = "http://localhost:5000";

export function getAllPosts() {
    const response = axios.get(`${baseURL}/post`);
    return response;
}

export function searchPosts(title) {
    const response = axios.get(`${baseURL}/post/search?title=${title}`)
    return response;
}

export function getUserPosts() {
    const response = axios.get(`${baseURL}/post/byUser`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response;
}

export function createUserPosts(data) {
    const response = axios.post(`${baseURL}/post/create`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        },
    });
    return response;
}

export function deletePost(postId) {
    const response = axios.delete(`${baseURL}/post/delete/${postId}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response;
}

export function editPost(postId, newData) {
    const response = axios.patch(`${baseURL}/post/update/${postId}`, newData, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response
}