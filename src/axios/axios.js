import axios from 'axios'

const instance = axios.create({
    headers:{
        'Access-Token' : window.localStorage.getItem("Access-Token"),
    }
})

export default instance;