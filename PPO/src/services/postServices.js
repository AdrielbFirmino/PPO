import axios from 'axios'

const baseURL = "http://localhost:5000";

export function getAllPosts() {
    const response = axios.get(`${baseURL}/post`);
    return response;
}