import axios from 'axios'

const BASE_URL = 'https://conduit.productionready.io';

export const request = axios.create({
    baseURL: BASE_URL,
    
})
request.interceptors.response.use((response) => {
   return response;
}, (error) => {
    return Promise.reject(error.response)
})
