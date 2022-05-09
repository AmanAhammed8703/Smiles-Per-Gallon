import axios from 'axios'

const logApi=axios.create({baseURL:'http://localhost:9000'});

logApi.interceptors.request.use(
    function(configs) {
        const token=JSON.parse( localStorage.getItem("userData"))
      
      if (token) {
        configs.headers["Authorization"] = token;
      }
      return configs;
    },
    function(error) {
      return Promise.reject(error);
    }
  );


export default logApi;