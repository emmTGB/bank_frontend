import axiosInstance from "./axiosInstance";

export const getUser = async (id) =>{
  try {
     return await axiosInstance(`/user/${id}`)
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
    return await axiosInstance(`/user/${userId}/accounts/${pageNumber}`)
  }catch (error){
    console.log(error);
    throw error.response ? error.response : new Error('Account not found.')
  }
}