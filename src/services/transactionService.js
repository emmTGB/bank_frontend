import axiosInstance from "./axiosInstance"

export const doTransaction = async (type, transaction) =>{
    try{
        return await axiosInstance.post(`/transaction/${type}`, transaction)
    }catch(error){
        console.log(error);
        throw error.response ? error.response : new Error("Error creating transaction")
    }
}