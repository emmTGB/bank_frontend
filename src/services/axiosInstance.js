import axios from "axios";
import {getAccessToken, refreshToken} from "./authService";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9009/api',
  timeout: 10000,
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken()
  if(accessToken){
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) =>{
    const originalRequest = error.config

    if(error.response && error.response.status === 401 && !originalRequest._retry){
      originalRequest._retry = true;

      try{
        await refreshToken();
        const accessToken = getAccessToken()
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        return axiosInstance(originalRequest)
      }catch (error){
        console.error('refresh failed', error)
        // window.location.href = '/auth/login'
      }
    }
    return Promise.reject(error);
  }
)

export default axiosInstance;