import axiosInstance from "./axiosInstance";

export const createAccount = (requestBody) =>{
  try{
    return axiosInstance('/account/create', requestBody);
  }catch (error){
    console.log(error.response)
    throw error.response ? error.response : new Error('Login failed');
  }
}