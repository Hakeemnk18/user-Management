import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useSelector,useDispatch  } from 'react-redux'
import { addUser } from '../../../store/slices/userSlice'

const EditUserModal = ({onCancel}) => {
     
    const user = useSelector((store)=> store.user.user)
    const dispatch = useDispatch()
   const [formData,setFormData] = useState({
        name:user.name,
        email:user.email,
        _id:user._id
   })
  //validate function
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
    
    return newError
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const newError = validate()

    if(Object.keys(newError).length === 0){
      console.log('object is empty')
      setErrors(newError)
      try {
        const response = await axios.put('/api/editUser',formData)
        dispatch(addUser(response.data.user))
        toast.success("user edited")
        
        
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
    
  }
  return (
    <div className="bg-black/50 absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">

        
            <button
                className="absolute left-[880px] text-gray-500 hover:text-red-500 font-bold"
                onClick={onCancel}
                >
                ✕
            </button>
        
                
            <form action="" className="flex flex-col space-y-3 mt-10">
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e)=> setFormData({...formData,name:e.target.value})}
                    className="text-gray-500 placeholder-gray-500 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
                />
                {
                    errors?.name && <span className='text-red-600 '>{errors.name}</span>
                }
                
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e)=> setFormData({...formData,email:e.target.value})}
                    className="text-gray-500 placeholder-gray-500 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
                />
                {
                    errors?.email && <span className='text-red-600 mb-6 ml-2 mt-0'>{errors.email}</span>
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
    </div>
  )
}

export default EditUserModal

