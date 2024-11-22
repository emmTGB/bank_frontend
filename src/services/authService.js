// src/services/authService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:9009/auth';

export const login = async (username, password) => {
    try {
        const response =  await axios.post(`${API_BASE_URL}/user/login`, {username, password});
        saveToken(response.headers)
        return response
    } catch (error) {
        throw error.response ? error.response : new Error('Login failed');
    }
};

export const register = async (userData) => {
    try {
        return await axios.post(`${API_BASE_URL}/user/register`, userData);
    } catch (error) {
        throw error.response ? error.response : new Error('Registration failed');
    }
};

export const refreshToken = async () => {
    try{
        const response = await axios.post(`${API_BASE_URL}/user/refresh`, {headers:{
                'Refresh-Token': getRefreshToken()
            }});
        saveToken(response.headers)
    }catch (error){
        throw error.response ? error.response : new Error('Refresh failed');
    }
}

export const saveToken = (headers) => {
    const authorization = headers['access-token'];
    const refreshToken = headers['refresh-token'];
    const id = headers['id'];
    console.log("1111:",headers);
    if(authorization){
        sessionStorage.setItem('authorization', authorization);
    }
    if(refreshToken){
        localStorage.setItem('refreshToken', refreshToken);
    }
    if(id){
        localStorage.setItem('id', id);
    }
}


export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
}

export const getAccessToken = () => {
    return sessionStorage.getItem('authorization');
}

export const getUserId = () => {
    return localStorage.getItem('id');
}