import axiosInstance from "./axiosInstance";

export const getUser = async (id) =>{
  try {
     return await axiosInstance.get(`/user/${id}`)
  }catch (error){
    console.log(error);
  }
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