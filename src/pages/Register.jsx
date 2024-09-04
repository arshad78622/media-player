import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { checkEmailApi } from '../services/allApis'
import { toast } from 'react-toastify'
import { registerApi } from '../services/allApis'
import { useNavigate } from 'react-router-dom'



function Register() {
const [user,setUser]=useState({
    username:"",email:"",password:""
})
const nav=useNavigate()

const handleRegister=async()=>{
    console.log(user);
    const{username,email,password}=user
    if(!username || !email || !password){
        toast.warning("enter valid inputs")
    }
    else{
        const result=await checkEmailApi(email)
        console.log(result);
        if(result.data.length > 0){
           toast.warning("email id is already in use")
        }
        else{
            const result=await registerApi(user)
            if(result.status=201){
                toast.success("success")
                setUser({
                    username:"",email:"",password:""
                })
                nav('/login')
            }
            else{
                toast.error("registration failed")
            }
        }
        
    }
    
}

  return (
    <>
       <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
           <div className='w-75 border shadow bg-light p-5'>
                   <h1>regiser</h1>
                   <input type="email" className='form-control mb-3' placeholder='enter username' onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
                   <input type="email" className='form-control mb-3' placeholder='enter email id' onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
                   <input type="password" name='' placeholder='enter your password'  className='form-control mb-3' id='' onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
                   <div className='d-flex justify-content-between'>
                      <button className='btn btn-success' onClick={handleRegister}>register</button>
                      <Link to={'/login'}>already auser</Link>
                   </div>
           </div>
     </div>
    </>
)
}

export default Register