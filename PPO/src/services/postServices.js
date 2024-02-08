import axios from 'axios'

const baseURL = "http://localhost:5000";

export function getAllPosts() {
    const response = axios.get(`${baseURL}/post`);
    return response;
}

export function searchPosts(title) {
    const response = axios.get(`${baseURL}/post/search?title=${title}`)
    return response;
}