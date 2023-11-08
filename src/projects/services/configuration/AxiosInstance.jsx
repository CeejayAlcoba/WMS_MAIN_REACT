import axios from "axios";
import useToken from "../../hooks/useToken";

 const baseURL = 'https://jsonplaceholder.typicode.com';

 const axiosInstance =()=>{ 
    const {token}=useToken();
    return axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});} 



 export default axiosInstance;