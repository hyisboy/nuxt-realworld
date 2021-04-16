import axios from 'axios'
const BASE_URL = 'https://conduit.productionready.io';

export const request = axios.create({
    baseURL: BASE_URL,
})
export default ({store,redirect}) => {
  request.interceptors.request.use((config) => {
    const user = store.state.user.user;
    const token = user ? user.token : undefined;
    
    if(token){
      config.headers.authorization = `Token ${token}`
    }
    return config;
  },(err) => {
    console.log(err);
    return err;
  })
  request.interceptors.response.use((response) => {
    return response;
  },err => {
    switch(err.response.status){
      case 401: 
      redirect('/login'); 
      return Promise.reject();
    }
    return Promise.reject(err.response)
  })

}


