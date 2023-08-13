const axios = require('axios')

const axiosIntance = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 1000,
    headers: {
        'Content-type': 'application/json'
    }
})

export default axiosIntance

