import axios from "axios";

const base_url="https://mediaplayer-9ekn.onrender.com"

export const addVideos =async (data)=>{
    return await axios.post(`${base_url}/videos`,data)
} 

export const getVideos=async ()=>{
    return await axios.get(`${base_url}/videos`)
}

export const deleteVideos=async(id)=>{
    return await axios.delete(`${base_url}/videos/${id}`)
}

export const addCategory=async(data)=>{
    return await axios.post(`${base_url}/catagories`,data)
}
export const getCategories=async()=>{
    return await axios.get(`${base_url}/catagories`)
}

export const checkEmailApi=async(email)=>{
    return await axios.get(`${base_url}/users?email=${email}`)
}

export const registerApi=async(data)=>{
    return await axios.post(`${base_url}/users`,data)
}

export const loginApi=async(email,password)=>{
    return await axios.post(`${base_url}/users?email=${email}&password=${password}`)
}