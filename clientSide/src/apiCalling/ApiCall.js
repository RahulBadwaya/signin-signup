import axios from "axios";

 export async function signupApi(user){
  return await axios.post(`http://localhost:4000/signup`,user)  
}

export async  function loginApi (userLogin){
  return await axios.post(`http://localhost:4000/login`,userLogin)
 }

 export async function restaurentApi () {
    return await axios.get(`http://localhost:4000/restaurent`)
 }

 export async function adminApi(restaurent){
   return await axios.post(`http://localhost:4000/restaurent`, restaurent)
 }