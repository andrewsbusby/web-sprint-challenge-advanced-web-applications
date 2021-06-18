import {axiosAuth} from '../helpers/axiosWithAuth';


const fetchColorService = () => {
    
    axiosAuth()
        .get('/colors')
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

export default fetchColorService;