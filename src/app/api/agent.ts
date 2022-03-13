import axios, { AxiosResponse } from 'axios';
 import { toast } from 'react-toastify';
import { ILink, ILinksEnvelope } from '../models/links';


axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('jwt');
    if(token) config.headers.Authorization = `Bearer ${token}`;
    config.withCredentials = true;
    return config;
}, error =>{
    return Promise.reject(error);
})

axios.interceptors.response.use(undefined, error => {

    if(error.message === 'Network Error' && !error.response)
    {
        toast.error('Network error - Sunucu bağlantı hatası!',{theme: "colored"});//make sure API is running!
    }
    const {status, data, config, headers} = error.response;
    if(status === 401 && headers['www-authenticate'] === 'Bearer error="invalid_token", error_description="The token is expired"')
    {
       window.localStorage.removeItem('jwt');
     //  history.push('/');
       toast.info("Oturumunuzun süresi dolmuştur.",{theme: "colored"})
    }   
    if(status === 404)
    {
      //  history.push('/notFound');
      toast.error('Hata oluştu!',{theme: "colored"})
    }   
    if(status === 403)
    {
      //  history.push('/forbidden');
      toast.error('Hata oluştu!',{theme: "colored"})
    }  
    if(status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id'))
    {
      //  history.push('/notFound');
      toast.error('Hata oluştu!',{theme: "colored"})
    }
    if( status === 500 )
    {
        toast.error('Hata oluştu!',{theme: "colored"});//Server error - check the terminal for more info!
    }
    throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

// const sleep = (ms: number) => (response: AxiosResponse) =>
//         new Promise<AxiosResponse>(resolve => setTimeout(()=> resolve(response), ms));


const requests = {
    get: ( url: string ) => axios.get(url).then(responseBody),
    post:( url:string, body:{} ) => axios.post(url, body).then(responseBody),
    put: (url: string, body:{}) => axios.put(url, body).then(responseBody),
    del:(url:string) => axios.delete(url).then(responseBody),
  
}

const Links = {
    list: (params: URLSearchParams): Promise<ILinksEnvelope> => 
            axios.get(`/links`, {params:params}).then(responseBody)
    
}


export default {
    Links
   
}