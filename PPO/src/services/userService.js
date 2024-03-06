import axios from "axios";
import Cookies from "js-cookie"

const baseURL = "http://localhost:5000";

export function signup(data) {
    delete data.confirmpassword;
    const body = {...data, username: generateUserName(data.name), avatar:"https://i.imgur.com/w3UEu8o.jpeg"};
    const response = axios.post(`${baseURL}/user/create`, body);
    return response;
}

export function signin(data) {
    const response = axios.post(`${baseURL}/auth/login`, data)
    return response;
}

export function userLogged() {
    const response = axios.get(`${baseURL}/user/findById`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return response;
}

export function findUserById(userId) {
    const response = axios.get(`${baseURL}/user/findById/${userId}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return response;
}

export function editUser(userId, newData) {
    try {
        const response = axios.patch(`${baseURL}/user/update/${userId}`, newData, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao editar usuário:", error);
        throw error;
    }
}

function generateUserName(name) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`
}