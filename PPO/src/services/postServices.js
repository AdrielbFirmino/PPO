import axios from 'axios'
import Cookies from 'js-cookie';

const baseURL = "http://localhost:5000";

export function getAllPosts(limit, offset) {
    const response = axios.get(`${baseURL}/post`, {
        params: {
            limit,
            offset
        }
    });
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

export function deleteComment(postId, idComment) {
    try {
        const response = axios.patch(`${baseURL}/post/comment/${postId}/${idComment}`, null, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response;
    } catch (error) {
        console.error("Erro ao deletar comentário:", error);
        throw error;
    }
}

export function editPost(postId, newData) {
    try {
        const response = axios.patch(`${baseURL}/post/update/${postId}`, newData, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao editar postagem:", error);
        throw error;
    }
}

export function getPostById(postId) {
    try {
        const response = axios.get(`${baseURL}/post/byIdPost/${postId}`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response;
    } catch (error) {
        console.error("Erro ao procurar a postagem:", error);
        throw error;
    }
}

export function addComment(postId, data) {
    try {
        const response = axios.patch(`${baseURL}/post/comment/${postId}`, data, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response;
    } catch (error) {
        console.error("Erro ao fazer o comentário:", error);
        throw error;
    }
}

export function likePost(postId) {
    try {
        const response = axios.post(`${baseURL}/post/like/`, postId, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response;
    } catch (error) {
        console.error("Erro ao dar like no post:", error);
        throw error;
    }
}

export function removeLikePost(postId) {
    try {
        const response = axios.delete(`${baseURL}/post/like/${postId}`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response;
    } catch (error) {
        console.error("Erro ao remover like no post:", error);
        throw error;
    }
}