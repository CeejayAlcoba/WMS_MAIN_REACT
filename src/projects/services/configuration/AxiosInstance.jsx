import axios from "axios";

 const baseURL = 'https://jsonplaceholder.typicode.com';

 const axiosInstance =()=>{ 
    const token = localStorage.getItem("token")
    return axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});} 



 export default axiosInstance;