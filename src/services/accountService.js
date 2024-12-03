import axiosInstance from "./axiosInstance";


export const createAccount = async (requestBody) =>{
  try{
    return await axiosInstance.post('/account/create', requestBody);
  }catch (error){
    console.log(error.response)
    throw error.response ? error.response : new Error('Login failed');
  }
}

export const getAccountDetails = async (accountId) =>{
  try{
    return await axiosInstance.get(`/account/${accountId}/basic`);
  }catch (error){
    console.log(error.response)
    throw error.response ? error.response : new Error('Account not found.');
  }
}

export const getAccountDetailsM = async (accountId) =>{
  try{
    return await axiosInstance.get(`/account/${accountId}/details`);
  }catch (error){
    console.log(error.response)
    throw error.response ? error.response : new Error('Account not found.');
  }
}