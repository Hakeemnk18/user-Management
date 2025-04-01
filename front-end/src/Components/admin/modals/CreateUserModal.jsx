import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const CreateUserModal = ({closeModal,setUserCreated}) => {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:''
  })
  const [errors,setErrors] = useState({})

  //validate function
  const validate = () =>{
    const newError = {}
    
    if(formData.name.trim() === ''){
      newError.name = "name is required"
    }
    if(formData.email.trim() === ''){
      newError.email = 'email is required'
    }
    if(formData.password.trim() === ''){
      newError.password = 'password is required'
    }
    return newError
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const newError = validate()

    if(Object.keys(newError).length === 0){
      console.log('object is empty')
      setErrors(newError)
      try {
        const response = await axios.post('/api/admin/createUser',formData)
        toast.success("user created")
        setUserCreated(true)
        
      } catch (error) {
        if (error.response) {
            toast.error(error.response.data.message || 'An error occurred');
          } else {  
            toast.error('Something went wrong. Please try again.');
          }
      }

    }else{
      console.log("has error ",newError)
      setErrors(newError)
    }
    // console.log(formData)
  }
  return (
    <div className="w-[280px] bg-white p-4 shadow-lg rounded-lg absolute bottom-40 right-40">
  
    <button
          className="absolute top-2 right-4 text-gray-500 hover:text-red-500 font-bold"
          onClick={closeModal}
        >
          ✕
    </button>
  
        
    <form action="" className="flex flex-col space-y-3 mt-10">
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e)=> setFormData({...formData,name:e.target.value})}
            className="text-gray-500 placeholder-gray-500 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          {
            errors?.name && <span className='text-red-600 mb-6 ml-2 mt-0'>{errors.name}</span>
          }
          
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e)=> setFormData({...formData,email:e.target.value})}
            className="text-gray-500 placeholder-gray-500 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          {
            errors?.email && <span className='text-red-600 mb-6 ml-2 mt-0'>{errors.email}</span>
          }
          
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e)=> setFormData({...formData,password:e.target.value})}
            className="text-gray-500 placeholder-gray-500 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          {
            errors?.password && <span className='text-red-600 mb-6 ml-2 mt-0'>{errors.password}</span>
          }
          
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={handleSubmit}
          >
            Submit
    </button>
  </form>
  </div>
  )
}

export default CreateUserModal
