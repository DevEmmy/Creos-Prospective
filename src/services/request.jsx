import axios from "axios";
import notify from "./toastify";
const api = "http://localhost:3030"
const kidsDashboard = "https://ck-kids-dashboard.vercel.app/"

const getCookie = ()=>{

}

export const studentLogin = async (email, password)=>{
    await axios.post(`${api}/student/sign-in`, {
        email, password
    })
    .then(response => {
        console.log(response.data)
        const token = response.data.payload.token
        if(token){
            localStorage.setItem('token', token);
            notify(response.data.message)
            window.location.href = kidsDashboard+`/?token=${token}`
        }
        
    })
    .catch(err => console.log(err))
}

export const schoolLogin = (email, password)=>{
    axios.post(`${api}/school/sign-in`, {
        email, password
    })
    .then(response => {
        window.location.href = kidsDashboard
    })
    .catch(err => console.log(err))
}

export const studentRegister = (fullName, email, productKey, password)=>{
    axios.post(`${api}/student/sign-up`, {
        email, password, fullName, productKey
    })
    .then(response => {
        window.location.href = kidsDashboard
    })
    .catch(err => console.log(err))
}

export const schoolRegister = (schoolName, email, password)=>{
    axios.post(`${api}/school/sign-up`, {
        email, password, schoolName
    })
    .then(response => {
        window.location.href = kidsDashboard
    })
    .catch(err => console.log(err))
}