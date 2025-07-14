import axiosInstance from "./axiosInstance";
import {getRefreshToken, getUserId} from "./authService";
import axios from "axios";

export const logout = async () => {
  try{
    return await axios.post("/user/logout", {
      headers: {
        "Refresh-Token": getRefreshToken()
      }
    });
  }catch(error){
    console.log(error)
    throw error.response ? error.response : new Error('Refresh failed');
  }
}

export const getUser = async (id) =>{
  try {
    return await axiosInstance.get(`/user/${id}`)

  }catch (error){
    console.log(error);
  }
}


export const update = async (userData) => {
  try {
    return await axiosInstance.post(`/user/update/${getUserId()}`, userData);
  } catch (error) {
    throw error.response ? error.response : new Error('Registration failed');
  }
};

export const getFullName = async ()=> {
  if(!sessionStorage.getItem('fullName')){
    sessionStorage.setItem('fullName', (await getUser(getUserId())).data.fullName);
  }
  return sessionStorage.getItem('fullName')
}

/**
 * Fetch paginated accounts for a user.
 * @param {string} userId - The user's ID.
 * @param {number} pageNumber - The page number.
 * @returns {Promise<PaginatedResponse<Account>>} The API response containing accounts.
 */
export const getAccountsByUserPage = async (userId, pageNumber) => {
  try{
    return await axiosInstance.get(`/user/${userId}/accounts/${pageNumber}`)
  }catch (error){
    console.log(error);
    throw error.response ? error.response : new Error('Account not found.')
  }
}

export const getAccountsList = async (userId) =>{
  try{
    return await axiosInstance.get(`/user/${userId}/accounts/list`);
  }catch (error){
    console.log(error);
    throw error.response ? error.response : new Error('Account not found.')
  }
}