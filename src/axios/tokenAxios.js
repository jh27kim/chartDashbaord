import axios from 'axios'

const baseURL = "http://localhost:8081" // todo use url using baseURL
const tokenAxios = (url, todo, method) =>{
    console.log(`url : ${url}`)
    var config = {
        url : baseURL+url,
        headers:{
            'Access-Token' : window.localStorage.getItem("Access-Token")
        },
        timeout:1000000,
        method : method 
        }
    axios(config)
    .then((response)=>{
        console.log(`response : ${response.data}`)
        if (response.data.errorCode === "TOKEN_REFRESH"){
            console.log("refreshing")
            window.localStorage.setItem("Access-Token", response.data.errorMessage)
            config.headers = {'Access-Token' : window.localStorage.getItem("Access-Token")}
            return response.data
        }
        if (response.data.errorCode === "TOKEN_EXPIRED"){
            throw Error("TOKEN_REFRESH")
        }
        todo(response)
    })
    .then((response)=>{
        if (!response){
            return
        }
        axios(config)
        .then((response)=>{
            if (response.data.errorCode === "TOKEN_REFRESH" || response.data.errorCode === "TOKEN_EXPIRED" ){
                throw Error("innerError") // todo : 한번 더 에러났을때??
            }
            console.log("rereuqest")
            todo(response)
        })
        
    })
    .catch((e)=>{
        console.log(e)
        // 에러 코드 맞춰서 로그인 페이지 보내주기
        // window.localStorage.removeItem("Access-Token")
        // this.$router.push("/login")
    }
    )
}

export default tokenAxios;