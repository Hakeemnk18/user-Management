import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addUser } from '../utils/userSlice'
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [name,setName] = useState()
    const [signInStatus,setSignInStatus] = useState("Login")
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    

    const loginSubmit = async(e)=>{
      try {
        e.preventDefault()
        
        const response = await fetch("/api/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                password:password
            }),
        })

        const json = await response.json()
        
        if(response.ok){
          
          localStorage.setItem('token', json.token);

          dispatch(addUser({
            name:json.name,
            _id:json._id,
            role:json.role,
            email:json.email
          }))

          toast.success('Login successful!');
          navigate('/home');
        }else{
          toast.error('Something went wrong');
        }

      } catch (error) {
        toast.error(error.message)
      }
        
        
    }
    const signSubmit = async(e)=>{
      try {
        e.preventDefault()
      
        const response = await fetch("/api/signup",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                password:password,
                name:name
            }),
        })

        const json = await response.json()
        
        
        if(json.ok){
          localStorage.setItem('token', json.token);

          dispatch(addUser({
            name:json.name,
            _id:json._id,
            role:json.role,
            email:json.email
          }))

          toast.success("user add successfully")
          navigate('/home');
        }else{
          console.log("inside else")
          toast.error(json.message || 'Something went wrong');
        }
        
      } catch (error) {
        console.log("inside error")
        toast.error(error.message)
      }
      
      
  }
  return (
    <div className='flex  justify-center items-center h-screen bg-gray-100'>
      <div className='w-[400px] rounded-xl h-auto bg-white p-5 border-0 shadow-lg'>
      <form action="" className='flex flex-col space-y-6'>
        {signInStatus === "Login" ? <></> :
          <input 
          type="text" 
          placeholder='enter your name'
          value={name}
          onChange={(e)=> setName(e.target.value)}
          className='bg-gray-300 py-2 pl-2 rounded-xl'
          />
        }
        <input 
        type="text" 
        placeholder='enter your email'
        className='bg-gray-300 py-2 pl-2 rounded-xl'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
        <input type="text"
          placeholder='enter your password'
          className='bg-gray-300 py-2 pl-2 rounded-xl'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        
        {
          signInStatus === "Login" ?
          <button 
          onClick={loginSubmit}
          className='py-2 bg-blue-400 font-bold rounded-xl'
        >Login</button> :
        <button 
          onClick={signSubmit}
          className='py-2 bg-blue-400 font-bold rounded-xl'
        >Signup</button>
        }
        

        {
          signInStatus === "Login" ?
          <p>Don't have an account ?<span className='text-gray-500 cursor-pointer' onClick={()=> setSignInStatus("Signup")}> Signup</span></p> :
          <p>Already have an account ? <span className='text-gray-500 cursor-pointer' onClick={()=> setSignInStatus("Login")}> Login</span></p>
        }
      </form>
      </div>
      
    </div>
  )
}

export default Login
