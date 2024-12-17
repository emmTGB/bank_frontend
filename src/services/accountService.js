import axiosInstance from "./axiosInstance";


export const createAccount = async (requestBody) => {
  try {
    return await axiosInstance.post('/account/create', requestBody);
  } catch (error) {
    console.log(error.response)
    throw error.response ? error.response : new Error('Login failed');
  }
}

export const getAccountDetails = async (accountId) => {
  try {
    return await axiosInstance.get(`/account/${accountId}/basic`);
  } catch (error) {
    console.log(error.response)
    throw error.response ? error.response : new Error('Account not found.');
  }
}

export const getAccountDetailsM = async (accountId) => {
  try {
    return await axiosInstance.get(`/account/${accountId}/details`);
  } catch (error) {
    console.log(error.response)
    throw error.response ? error.response : new Error('Account not found.');
  }
}

export const getTransactionsList = async (accountId) => {

  let page = 0
  let hasMore = true
  let transactions = []

  try {

    while (hasMore) {
      const response = await axiosInstance.get(`/account/${accountId}/transactions/${page}`)
      const data = response.data
      if (data && data.content && data.content.length > 0) {
        transactions = [...transactions, ...data.content]
        page++
        hasMore = data.totalPages > data.currentPage
      } else {
        hasMore = false
      }
    }
  } catch (error) {
    console.log(error.response)
    throw error.response ? error.response : new Error('Account not found.')
  } finally {
    return transactions
  }
}