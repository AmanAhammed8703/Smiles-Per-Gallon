import axios from 'axios'

const userApi=axios.create({baseURL:'http://localhost:9000'});

export default userApi;