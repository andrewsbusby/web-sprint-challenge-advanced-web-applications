import axios from "axios";


const axiosAuth = () => {
    const token = localStorage.getItem('token');
    axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            authorization: token
        }
    })
}

export default axiosAuth;
//Task List:
//Build and export a function used to send in our authorization token