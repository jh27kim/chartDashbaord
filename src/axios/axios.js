import axios from 'axios'

const instance = axios.create({
    headers:{
        'Access-Token' : window.localStorage.getItem("Access-Token"),
        'User-Email' : window.localStorage.getItem("User-Email")
    }
})

export default instance;